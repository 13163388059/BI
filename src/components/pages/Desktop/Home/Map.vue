<template lang="html">
  <div class="main">
    <ul class='label' style='position:absolute;z-index:3'>
      <li v-for="(v,i) in label" :key='v.name'><i :style='{backgroundColor:v.color}'></i>{{v.name}}</li>
    </ul>

    <div style="height:100%;width:100%" ref= 'map'></div>
  </div>
</template>

<script>
import mapStyle from "./mapStyleNew";

let
  interval = [],// 保存地图标注闪烁 interval 对象
  layout = [],// 保存地图标注闪烁对象
  interval_securityrisk = [], // 安全隐患 单独接口单独保存
  layout_securityrisk = [],
  baidu_map = null

export default {
  name: "bi-map",
  data() {
    return {
      label: [
        { name: '预警', color: "rgb(200,60,30)", id: 1 },
        { name: '报警', color: "rgb(255,20,26)", id: 2 },
        { name: '事故', color: "rgb(170,132,26)", id: 3 },
        { name: '施工', color: "#2aa515", id: 4 },
        { name: '隐患', color: "#d4237a", id: 5 },
        { name: '单兵', color: "#66ccff", id: 6 },
      ]
    };
  },
  computed: {
    label_map() {
      return this.label.reduce((res, i) => {
        res[i.id] = i.color
        return res
      }, {})
    }
  },
  methods: {
    panelClose() {
    },
    panelOpen(type) {
    },
    barClick(e) {
    }
  },
  mounted() {
    if (document.getElementById("baiduMapApi")) renderMap(this.$refs.map);
    else loadBaiduMap(this.$refs.map);
    const _this = this

    glob.polling
      .sub('GIS_GetMarkerPointByBI', 'emergency')
      .on('GIS_GetMarkerPointByBI', 'emergency', ({ data }) => {
        clearMap(baidu_map)
        data.forEach(i => {
          Evens(i, baidu_map, _this.label_map[i.MPEXDATA])
        })
      })

    glob.polling
      .sub('GetRiskMap', 'securityrisk')
      .on('GetRiskMap', 'securityrisk', ({ data }) => {
        clearMap(baidu_map,true)
        data.forEach(i => {
          Evens(i, baidu_map, _this.label_map[i.MPEXDATA],true)
        })
      })
  },
  beforeDestroy() {
    this.$store.commit("charts/clean");
    if (baidu_map)
      clearMap(baidu_map)
  }
};

function loadBaiduMap(dom) {
  const baiduMap = document.createElement("script");
  baiduMap.id = "baiduMapApi";
  baiduMap.src =
    "https://api.map.baidu.com/api?v=2.0&ak=QBlDySuCDr4IfxS2BWcQ3hdXyIQQvBqj&s=1&callback=initMap";
  document.getElementsByTagName("head")[0].appendChild(baiduMap);

  window.initMap = function () {
    renderMap(dom);
  };
}



function renderMap(dom) {
  const map = new BMap.Map(dom);

  map.setMapStyle(mapStyle);
  map.centerAndZoom(new BMap.Point(112.187097, 31.051866), 8);
  setBMapBoundary(map);
  baidu_map = map
}

function Evens(markerPoint, map, color, isSecurityrisk = false) {
  var isAnimation = true;
  var mPoint = new BMap.Point(markerPoint.LOCCUSLON, markerPoint.LOCCUSLAT);
  if (isAnimation) {
    var hlRadius = 300;
    var hlcircle = new BMap.Circle(mPoint, hlRadius, { strokeColor: color, strokeWeight: 10, strokeOpacity: 0.8 });
    map.addOverlay(hlcircle);
    var hlInterval_index = hlRadius;
    var hlInterval = setInterval(function () {
      hlcircle.setRadius(hlInterval_index);
      hlInterval_index -= 10;
      if (hlInterval_index < 0) hlInterval_index = hlRadius;
    }, 50);

    if (isSecurityrisk) {
      interval_securityrisk.push(hlInterval)
      layout_securityrisk.push(hlcircle)
    } else {
      interval.push(hlInterval)
      layout.push(hlcircle)
    }

  }
}

function BaiduMap(type) {
  const map = baidu_map;
  let point = new BMap.Point(113.235743, 31.281263);
  map.centerAndZoom(point, 10);
  createMarker(map, type);
}

function setBMapBoundary(map) {
  var bdary = new BMap.Boundary();
  bdary.get("湖北省", function (rshb) {
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

function clearMap(map, isSecurityrisk = false) {
  if (isSecurityrisk) {

    interval_securityrisk = interval_securityrisk.map(i => {
      clearInterval(i)
      return null
    }).filter(i => i)

    layout_securityrisk = layout_securityrisk.map(i => {
      map.removeOverlay(i)
      return null
    }).filter(i => i)
  } else {

    interval = interval.map(i => {
      clearInterval(i)
      return null
    }).filter(i => i)

    layout = layout.map(i => {
      map.removeOverlay(i)
      return null
    }).filter(i => i)
  }

}
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.label {
  position: absolute;
  right: 24px;
  top: 24px;
  background: rgba(0, 0, 0, 0.4);
  font-size: 16px;
  box-shadow: 0 0 96px 32px rgba(0, 0, 0, 0.5);
  list-style-type: none;
  i {
    height: 14px;
    width: 14px;
    border-radius: 7px;
    float: left;
    margin: 3px 6px 0 0;
    box-shadow: 0 1px 3px 0 rgba(255, 255, 255, 0.4);
  }

  li {
    margin-top: 6px;
  }
}
</style>
<style>
.BMap_scaleTxt {
  color: white !important;
}
</style>