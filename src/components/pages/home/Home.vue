<template lang="html">
  <div class="main">
    <bi-bar @barItemClick = 'barClick'/>
    <bi-panel :isShow="showPanel" :type='panelType' @close = 'panelClose'/>
    <div style="height:100%;width:100%" ref= 'map'></div>
  </div>
</template>

<script>
import bi_panel from './Panel.vue'
import bi_bar from './Bar.vue'
import {
  Tunnel,Bridge,Station
} from './mapData'
import mapStyle from './mapStyle'


console.log({
  Tunnel,Bridge,Station
})

export default {
  name: 'bi-home',
  components: {
    ['bi-panel']: bi_panel,
    ['bi-bar']: bi_bar
  },
  data() {
    return {
      showPanel: false,
      panelType: ''
    }
  },
  methods: {
    panelClose() { 
      this.showPanel = false
    },
    panelOpen(type){
      console.log(type)
      if((type =='收费站/管理所')||(type=='隧道')||(type=='桥梁')){
        console.log(111)
        this.panelType = type
        this.showPanel = true
      }else{
        this.showPanel = false
      }
    },
    barClick(e){
      this.panelOpen(e.type)
      BaiduMap(e.type)
    }
  },
  mounted() {
    if (document.getElementById('baiduMapApi'))
      renderMap(this.$refs.map)
    else
      loadBaiduMap(this.$refs.map)

  },
  beforeDestroy() {
    this.$store.commit("charts/clean");
  }
}

function loadBaiduMap(dom) {
  const baiduMap = document.createElement('script')
  baiduMap.id = 'baiduMapApi'
  baiduMap.src = "https://api.map.baidu.com/api?v=2.0&ak=QBlDySuCDr4IfxS2BWcQ3hdXyIQQvBqj&s=1&callback=initMap"
  document.getElementsByTagName('head')[0].appendChild(baiduMap)

  window.initMap = function () {
    renderMap(dom)
  }
}

function renderMap(dom) {
  const map = new BMap.Map(dom)
  let point = new BMap.Point(115.200075, 30.669524)

  map.setMapStyle(mapStyle)
  map.centerAndZoom(point, 10);
  map.enableScrollWheelZoom(true);
  setBMapHighlight(map);
  window._map = map
}

let poidOverlay=[];

function BaiduMap(type){
  const map = window._map;
  let point = new BMap.Point(115.200075, 30.669524);
  map.centerAndZoom(point, 10);
  createMarker(map,type);
}

function createMarker(map,type){
  let datas = null;
  let imgurl = null;
  removeBMapOverlayMarker(map);
  if(type=="收费站/管理所"){
    datas=Station;
    imgurl="http://ecs.whwckj.com:1001/res/Imgs/bmap_m_station.png";
  }else if(type=="桥梁"){
    datas=Bridge;
    imgurl="http://ecs.whwckj.com:1001/res/Imgs/bmap_m_bridge.png";
  }else if(type=="隧道"){
    datas=Tunnel;
    imgurl="http://ecs.whwckj.com:1001/res/Imgs/bmap_m_tunnel.png";
  }else{
    let datas = null;
    let imgurl = null;
  }
  if(datas != null){
    datas.forEach(element => {
      var pt = new BMap.Point(element.LOCCUSLON, element.LOCCUSLAT);
      var marker = new BMap.Marker(pt, {
          icon: new BMap.Icon(imgurl, new BMap.Size(36, (36 * 1.5))),
          title: element.MPID
      });
      var label = new BMap.Label(element.MPNAME, { offset: new BMap.Size(23, -20) });
      label.setStyle({ backgroundColor: "#008F6E", border: "none" });
      marker.setLabel(label);
      map.addOverlay(marker); 
      poidOverlay.push(marker);
    });
  }
}

function removeBMapOverlayMarker(map) {
    for (var i = 0; i < poidOverlay.length; i++) {
        var item = poidOverlay[i];
        map.removeOverlay(item);
    }
}

function setBMapHighlight(map) {
    var drivingRoute = new BMap.DrivingRoute(map, {
        onSearchComplete: function (results) {
            if (drivingRoute.getStatus() == BMAP_STATUS_SUCCESS) {
                var pts = results.getPlan(0).getRoute(0).getPath();
                var polyline = new BMap.Polyline(pts, { strokeColor: "#989898", strokeWeight: 15, strokeOpacity: 0.7, enableMassClear: false });
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
    map.addOverlay(drivingRoute);
}
</script>

<style lang="css" scoped>
.main {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>
