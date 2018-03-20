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

export default {
  name: 'bi-home',
  components: {
    ['bi-panel']: bi_panel,
    ['bi-bar']: bi_bar
  },
  data() {
    return {
      showPanel: true,
      panelType: ''
    }
  },
  methods: {
    panelClose() { 
      this.showPanel = false
    },
    panelOpen(type){
      this.panelType = type
      this.showPanel = true
    },
    barClick(e){
      this.panelOpen(e.type)
      console.log(e.type)
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
  let point = new BMap.Point(116.404, 39.915)

  map.setMapStyle({
    styleJson: [{
      "featureType": "water",
      "elementType": "all",
      "stylers": {
        "color": "#021019"
      }
    },
    {
      "featureType": "highway",
      "elementType": "geometry.fill",
      "stylers": {
        "color": "#000000"
      }
    },
    {
      "featureType": "highway",
      "elementType": "geometry.stroke",
      "stylers": {
        "color": "#147a92"
      }
    },
    {
      "featureType": "arterial",
      "elementType": "geometry.fill",
      "stylers": {
        "color": "#000000"
      }
    },
    {
      "featureType": "arterial",
      "elementType": "geometry.stroke",
      "stylers": {
        "color": "#0b3d51"
      }
    },
    {
      "featureType": "local",
      "elementType": "geometry",
      "stylers": {
        "color": "#000000"
      }
    },
    {
      "featureType": "land",
      "elementType": "all",
      "stylers": {
        "color": "#08304b"
      }
    },
    {
      "featureType": "railway",
      "elementType": "geometry.fill",
      "stylers": {
        "color": "#000000"
      }
    },
    {
      "featureType": "railway",
      "elementType": "geometry.stroke",
      "stylers": {
        "color": "#08304b"
      }
    },
    {
      "featureType": "subway",
      "elementType": "geometry",
      "stylers": {
        "lightness": -70
      }
    },
    {
      "featureType": "building",
      "elementType": "geometry.fill",
      "stylers": {
        "color": "#000000"
      }
    },
    {
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#857f7f"
      }
    },
    {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#000000"
      }
    },
    {
      "featureType": "building",
      "elementType": "geometry",
      "stylers": {
        "color": "#022338"
      }
    },
    {
      "featureType": "green",
      "elementType": "geometry",
      "stylers": {
        "color": "#062032"
      }
    },
    {
      "featureType": "boundary",
      "elementType": "all",
      "stylers": {
        "color": "#1e1c1c"
      }
    },
    {
      "featureType": "manmade",
      "elementType": "geometry",
      "stylers": {
        "color": "#022338"
      }
    },
    {
      "featureType": "poi",
      "elementType": "all",
      "stylers": {
        "visibility": "off"
      }
    },
    {
      "featureType": "all",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off"
      }
    },
    {
      "featureType": "land",
      "elementType": "all",
      "stylers": {
        "color": "#232f3bff",
        "visibility": "on"
      }
    }
    ]
  })
  map.centerAndZoom(point, 10)
}
</script>

<style lang="css" scoped>
.main {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>
