<template lang="html">
  <div class="main">
    <bi-bar @barItemClick = 'barClick'/>
    <bi-panel :isShow="showPanel" :type='panelType' @close = 'panelClose'/>
    <div style="height:100%;width:100%" ref= 'map'></div>
  </div>
</template>

<script>
import bi_panel from "./Panel.vue";
import bi_bar from "./Bar.vue";
import { Tunnel, Bridge, Station, KMPile } from "./mapData";
import mapStyle from "./mapStyle";

export default {
  name: "bi-home",
  components: {
    ["bi-panel"]: bi_panel,
    ["bi-bar"]: bi_bar
  },
  data() {
    return {
      showPanel: false,
      panelType: ""
    };
  },
  methods: {
    panelClose() {
      this.showPanel = false;
    },
    panelOpen(type) {
      if (type == "收费站/管理所" || type == "隧道" || type == "桥梁") {
        this.panelType = type;
        this.showPanel = true;
      } else {
        this.showPanel = false;
      }
    },
    barClick(e) {
      this.panelOpen(e.type);
      BaiduMap(e.type);
    }
  },
  mounted() {
    if (document.getElementById("baiduMapApi")) renderMap(this.$refs.map);
    else loadBaiduMap(this.$refs.map);
  },
  beforeDestroy() {
    this.$store.commit("charts/clean");
  }
};

function loadBaiduMap(dom) {
  const baiduMap = document.createElement("script");
  baiduMap.id = "baiduMapApi";
  baiduMap.src =
    "https://api.map.baidu.com/api?v=2.0&ak=QBlDySuCDr4IfxS2BWcQ3hdXyIQQvBqj&s=1&callback=initMap";
  document.getElementsByTagName("head")[0].appendChild(baiduMap);

  window.initMap = function() {
    renderMap(dom);
  };
}

let MP_ZOOMTOSCALE = {
  "14": 1,
  "13": 2,
  "12": 5,
  "11": 10,
  "10": 20,
  "9": 25,
  "8": 50,
  "7": 100,
  "6": 200,
  "5": 500
};

function renderMap(dom) {
  const map = new BMap.Map(dom);
  map.setMapStyle(mapStyle);
  map.centerAndZoom(new BMap.Point(115.200075, 30.669524), 10);
  map.enableScrollWheelZoom(true);
  map.addEventListener("zoomend", function() {
    createKMPileMarker(map);
  });
  map.addControl(
    new BMap.ScaleControl({
      anchor: BMAP_ANCHOR_TOP_LEFT,
      offset: new BMap.Size(60, 75)
    })
  );
  map.addControl(new BMap.NavigationControl({ offset: new BMap.Size(15, 60) }));
  setBMapHighlight(map);
  createKMPileMarker(map);
  setBMapBoundary(map);
  window._map = map;
}

let poidOverlay = [];

function BaiduMap(type) {
  const map = window._map;
  let point = new BMap.Point(115.200075, 30.669524);
  map.centerAndZoom(point, 10);
  createMarker(map, type);
}

function createKMPileMarker(map) {
  removeBMapOverlayMarker(map, "MK");
  let datas = KMPile;
  let zoom = map.getZoom();
  let zoomBL = MP_ZOOMTOSCALE[zoom];
  if (zoom >= 14) {
    zoomBL = 1;
  } else if (zoom < 8) {
    return;
  }
  datas.filter(i => i.HIGHWAY == "G42").forEach((element, index, db) => {
    if (index == 0 || index == db.length - 1 || element.PILENO % zoomBL == 0) {
      createPileMarker(element, map);
    }
  });
  datas
    .filter(i => i.HIGHWAY == "G42S")
    .sort(function(a, b) {
      if (a.PILENO < b.PILENO) {
        return 1;
      } else {
        return -1;
      }
    })
    .forEach((element, index, db) => {
      if (
        index == 0 ||
        index == db.length - 1 ||
        element.PILENO % zoomBL == 0
      ) {
        createPileMarker(element, map);
      }
    });
  datas.filter(i => i.HIGHWAY == "G50").forEach((element, index, db) => {
    if (index == 0 || index == db.length - 1 || element.PILENO % zoomBL == 0) {
      createPileMarker(element, map);
    }
  });
  datas.filter(i => i.HIGHWAY == "G70").forEach((element, index, db) => {
    if (index == 0 || index == db.length - 1 || element.PILENO % zoomBL == 0) {
      createPileMarker(element, map);
    }
  });
}

function createPileMarker(element, map) {
  let imgurl = window.STATIC_URL + "res/Imgs/bmap_m_kmpile.png";
  var pt = new BMap.Point(element.LOCCUSLON, element.LOCCUSLAT);
  var marker = new BMap.Marker(pt, {
    icon: new BMap.Icon(imgurl, new BMap.Size(33, 32), {
      anchor: new BMap.Size(2, 16)
    }),
    title: element.MPID
  });
  var label = new BMap.Label(element.MPNAME, {
    offset: new BMap.Size(1, 2)
  });
  label.setStyle({
    "background-color": "transparent",
    color: "#3f3f3f",
    border: "none",
    fontSize: "11px",
    fontFamily: "Arial"
  });
  marker.setLabel(label);
  map.addOverlay(marker);
  poidOverlay.push({ type: "MK", db: marker });
}

function createMarker(map, type) {
  let datas = null;
  let imgurl = null;
  removeBMapOverlayMarker(map, "LC");
  if (type == "收费站/管理所") {
    datas = Station;
    imgurl = window.STATIC_URL + "res/Imgs/bmap_m_station.png";
  } else if (type == "桥梁") {
    datas = Bridge;
    imgurl = window.STATIC_URL + "res/Imgs/bmap_m_bridge.png";
  } else if (type == "隧道") {
    datas = Tunnel;
    imgurl = window.STATIC_URL + "res/Imgs/bmap_m_tunnel.png";
  } else {
    let datas = null;
    let imgurl = null;
  }
  if (datas != null) {
    datas.forEach(element => {
      var pt = new BMap.Point(element.LOCCUSLON, element.LOCCUSLAT);
      var marker = new BMap.Marker(pt, {
        icon: new BMap.Icon(imgurl, new BMap.Size(36, 36 * 1.5)),
        title: element.MPID
      });
      var label = new BMap.Label(element.MPNAME, {
        offset: new BMap.Size(23, -20)
      });
      label.setStyle({ backgroundColor: "transparent",color:'#ffffff', border: "none" });
      marker.setLabel(label);
      map.addOverlay(marker);
      poidOverlay.push({ type: "LC", db: marker });
    });
  }
}

function removeBMapOverlayMarker(map, type) {
  for (var i = 0; i < poidOverlay.length; i++) {
    var item = poidOverlay[i];
    if (item.type == type) {
      map.removeOverlay(item.db);
    }
  }
}

function setBMapHighlight(map) {
  var drivingRoute = new BMap.DrivingRoute(map, {
    onSearchComplete: function(results) {
      if (drivingRoute.getStatus() == BMAP_STATUS_SUCCESS) {
        var pts = results
          .getPlan(0)
          .getRoute(0)
          .getPath();
        var polyline = new BMap.Polyline(pts, {
          strokeColor: "#989898",
          strokeWeight: 15,
          strokeOpacity: 0.7,
          enableMassClear: false
        });
        map.addOverlay(polyline);
      }
    }
  });

  //武麻高速
  var WM_S = new BMap.Point(114.554023, 31.002106);
  var WM_E = new BMap.Point(115.464186, 31.287435);
  drivingRoute.search(WM_S, WM_E);
  //武英高速
  var WY_S = new BMap.Point(114.598641, 30.782112);
  var WY_E = new BMap.Point(115.881139, 30.814093);
  drivingRoute.search(WY_S, WY_E);
  //黄黄高速
  var HH_S = new BMap.Point(115.107015, 30.25484);
  var HH_E = new BMap.Point(116.091958, 30.122612);
  drivingRoute.search(HH_S, HH_E);
  //黄小高速
  var HX_S = new BMap.Point(115.922869, 30.034519);
  var HX_E = new BMap.Point(115.920574, 29.72895);
  drivingRoute.search(HX_S, HX_E);
  //汉十
  var HS_S = new BMap.Point(114.313529, 30.771434);
  var HS_E = new BMap.Point(110.09703, 33.222924);
  drivingRoute.search(HS_S, HS_E);
  map.addOverlay(drivingRoute);
}
function setBMapBoundary(map) {
  var bdary = new BMap.Boundary();
  bdary.get("湖北省", function(rshb) {
    var pl2 = new BMap.Polyline(rshb.boundaries[0], {
      strokeColor: "#4CAAFF",
      strokeWeight: 3,
      strokeOpacity: 0.9,
      strokeStyle: "dashed",
      enableMassClear: false
    });
    map.addOverlay(pl2);
  });
}
</script>

<style lang="css" scoped>
.main {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
<style>
.BMap_scaleTxt {
  color: white !important;
}
</style>