<template lang="html">
  <div class="main">
    <div style="height:100%;width:100%" ref= 'map'></div>
  </div>
</template>

<script>
import { Tunnel, Bridge, Station, KMPile } from "./mapData";
import mapStyle from "./mapStyleNew";

export default {
  name: "bi-map",
  data() {
    return {
    };
  },
  methods: {
    panelClose() {
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
    }
  },
  mounted() {
    if (document.getElementById("baiduMapApi")) renderMap(this.$refs.map);
    else loadBaiduMap(this.$refs.map);
  },
  beforeDestroy() {
    this.$store.commit("charts/clean");
    if(window.hlInterval) clearInterval(window.hlInterval)
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



function renderMap(dom) {
  const map = new BMap.Map(dom);
 
  map.setMapStyle(mapStyle);
  map.centerAndZoom(new BMap.Point(112.187097,31.051866), 8);
  setBMapBoundary(map);
  var dates = [
    {
      "MPID": "ddd97773-940b-4ad7-b386-f36b22700516",
      "MPTYPE": "EmergentEvent",
      "MPTYPENAME": "突发事件",
      "HIGHWAY": "G42S",
      "SECTION": "双向",
      "SECTIONID": 3,
      "PILENORS": "39.590",
      "PILENORE": "74.711",
      "MPCODE": "c648929d-3843-48c5-9852-03d0bbae605b",
      "MPNAME": "恶劣天气",
      "MPTEXT": "从汪集-总路咀发生事故！",
      "MPEXDATA": "-1",
      "PILENO": "39.590",
      "LOCWGSLON": null,
      "LOCWGSLAT": null,
      "LOCCUSLON": 114.728224586800000000000,
      "LOCCUSLAT": 30.795007322575000000000,
      "LOCRSLON": 114.728224586800000000000,
      "LOCRSLAT": 30.795007322575000000000,
      "LOCRELON": 115.060696265990000000000,
      "LOCRELAT": 30.706550477334000000000,
      "MPEXLASTDATA": "-1"
    },
    {
      "MPID": "bfafe601-e00a-4bb1-947c-edad5a919f78",
      "MPTYPE": "EmergentEvent",
      "MPTYPENAME": "突发事件",
      "HIGHWAY": "G42S",
      "SECTION": "武英向",
      "SECTIONID": 1,
      "PILENORS": "123.400",
      "PILENORE": "125.600",
      "MPCODE": "e9ffc0d3-4e1a-4258-a5f6-f43cb47f2707",
      "MPNAME": "凤凰关、濛濛山桥隧群危化品运输事故",
      "MPTEXT": "从凤凰关隧道-濛濛山隧道发生事故！",
      "MPEXDATA": "-1",
      "PILENO": "123.400",
      "LOCWGSLON": null,
      "LOCWGSLAT": null,
      "LOCCUSLON": 115.531038000000000000000,
      "LOCCUSLAT": 30.798802000000000000000,
      "LOCRSLON": 115.531038000000000000000,
      "LOCRSLAT": 30.798802000000000000000,
      "LOCRELON": 115.562428690340000000000,
      "LOCRELAT": 30.794419079451000000000,
      "MPEXLASTDATA": "-1"
    },
    {
      "MPID": "2c2b7710-7b95-49a1-b4e1-7e84504aa73b",
      "MPTYPE": "EmergentEvent",
      "MPTYPENAME": "突发事件",
      "HIGHWAY": "G42S",
      "SECTION": "武英向",
      "SECTIONID": 1,
      "PILENORS": "123.400",
      "PILENORE": "125.600",
      "MPCODE": "d120ac02-2cb8-45db-9890-387ed19b6bc0",
      "MPNAME": "凤凰关、濛濛山桥隧群危化品运输事故",
      "MPTEXT": "从凤凰关隧道-濛濛山隧道发生事故！",
      "MPEXDATA": "1",
      "PILENO": "123.500",
      "LOCWGSLON": null,
      "LOCWGSLAT": null,
      "LOCCUSLON": 115.531038000000000000000,
      "LOCCUSLAT": 30.798802000000000000000,
      "LOCRSLON": 115.531038000000000000000,
      "LOCRSLAT": 30.798802000000000000000,
      "LOCRELON": 115.562428690340000000000,
      "LOCRELAT": 30.794419079451000000000,
      "MPEXLASTDATA": "1"
    },
    {
      "MPID": "90cf847e-623d-4e82-a1ea-7e2e32b9c428",
      "MPTYPE": "EmergentEvent",
      "MPTYPENAME": "突发事件",
      "HIGHWAY": "G42S",
      "SECTION": "武英向",
      "SECTIONID": 1,
      "PILENORS": "135.841",
      "PILENORE": "157.412",
      "MPCODE": "8628926e-b587-46cf-8f70-69f99329d59c",
      "MPNAME": "省际收费广场车流量激增突发事件",
      "MPTEXT": "从英山-大枫树岭隧道发生事故！",
      "MPEXDATA": "-1",
      "PILENO": "135.841",
      "LOCWGSLON": null,
      "LOCWGSLAT": null,
      "LOCCUSLON": 115.656612716070000000000,
      "LOCCUSLAT": 30.765096313171000000000,
      "LOCRSLON": 115.656612716070000000000,
      "LOCRSLAT": 30.765096313171000000000,
      "LOCRELON": 115.857419000000000000000,
      "LOCRELAT": 30.805789000000000000000,
      "MPEXLASTDATA": "-1"
    },
    {
      "MPID": "26a42957-8159-4d44-b2fb-3a076e1d846f",
      "MPTYPE": "EmergentEvent",
      "MPTYPENAME": "突发事件",
      "HIGHWAY": "G42S",
      "SECTION": "武英向",
      "SECTIONID": 1,
      "PILENORS": "123.400",
      "PILENORE": "125.600",
      "MPCODE": "6346d91c-65a8-49f8-a6cd-140888158ccc",
      "MPNAME": "凤凰关、濛濛山桥隧群危化品运输事故",
      "MPTEXT": "从凤凰关隧道-濛濛山隧道发生事故！",
      "MPEXDATA": "1",
      "PILENO": "123.500",
      "LOCWGSLON": null,
      "LOCWGSLAT": null,
      "LOCCUSLON": 115.531038000000000000000,
      "LOCCUSLAT": 30.798802000000000000000,
      "LOCRSLON": 115.531038000000000000000,
      "LOCRSLAT": 30.798802000000000000000,
      "LOCRELON": 115.562428690340000000000,
      "LOCRELAT": 30.794419079451000000000,
      "MPEXLASTDATA": "1"
    },
    {
      "MPID": "0d3394aa-50da-470b-a209-6bd69aa90fb9",
      "MPTYPE": "EmergentEvent",
      "MPTYPENAME": "突发事件",
      "HIGHWAY": "G42",
      "SECTION": "麻武向",
      "SECTIONID": 1,
      "PILENORS": "693.100",
      "PILENORE": "693.100",
      "MPCODE": "3c9d7f67-4aa4-4c00-ac51-ca4c84d93434",
      "MPNAME": "恶劣天气",
      "MPTEXT": "从木子店服务区-木子店服务区发生事故！",
      "MPEXDATA": "-1",
      "PILENO": "693.100",
      "LOCWGSLON": null,
      "LOCWGSLAT": null,
      "LOCCUSLON": 115.428317696480000000000,
      "LOCCUSLAT": 31.246687094198000000000,
      "LOCRSLON": 115.428317696480000000000,
      "LOCRSLAT": 31.246687094198000000000,
      "LOCRELON": 115.428317696480000000000,
      "LOCRELAT": 31.246687094198000000000,
      "MPEXLASTDATA": "-1"
    },
    {
      "MPID": "580446df-812c-4a3f-bf5e-a42490d9f2af",
      "MPTYPE": "EmergentEvent",
      "MPTYPENAME": "突发事件",
      "HIGHWAY": "G42",
      "SECTION": "麻武向",
      "SECTIONID": 1,
      "PILENORS": "760.000",
      "PILENORE": "760.000",
      "MPCODE": "ab1f7176-dd00-49b7-afab-7845319244d5",
      "MPNAME": "交通事故",
      "MPTEXT": "从麻城东互通（收费站）-永佳河互通（收费站）发生事故！",
      "MPEXDATA": "3",
      "PILENO": "760.000",
      "LOCWGSLON": null,
      "LOCWGSLAT": null,
      "LOCCUSLON": 114.806849255580000000000,
      "LOCCUSLAT": 31.112310390047000000000,
      "LOCRSLON": 114.806849255580000000000,
      "LOCRSLAT": 31.112310390047000000000,
      "LOCRELON": 114.806849255580000000000,
      "LOCRELAT": 31.112310390047000000000,
      "MPEXLASTDATA": "3"
    }];
  
  
  window._map = map;
  dates.forEach(s=>{
    Evens(s,map);
  });
}

function Evens(markerPoint,map){
    var isAnimation=true;
    var mPoint = new BMap.Point(markerPoint.LOCCUSLON, markerPoint.LOCCUSLAT);
    if (isAnimation) {
        var hlRadius = 300;
        var hlcircle = new BMap.Circle(mPoint, hlRadius, { strokeColor: "#F43C12", strokeWeight: 10, strokeOpacity: 0.8 });
        map.addOverlay(hlcircle);
        var hlInterval_index = hlRadius;
        var hlInterval = setInterval(function () {
            hlcircle.setRadius(hlInterval_index);
            hlInterval_index -= 10;
            if (hlInterval_index < 0) hlInterval_index = hlRadius;
        }, 50);
        window.hlInterval = hlInterval;
    }
}

function BaiduMap(type) {
  const map = window._map;
  let point = new BMap.Point(113.235743,31.281263);
  map.centerAndZoom(point, 10);
  createMarker(map, type);
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