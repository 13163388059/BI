<template lang="html">
  <div class="main">
    <bi-panel :isShow="showPanel"/>
    <div style="height:100%;width:100%" ref= 'map'></div>
  </div>
</template>

<script>
import bi_panel from './Panel.vue'

export default {
  name: 'bi-home',
  components:{
    ['bi-panel']:bi_panel
  },
  data() {
    return {
      showPanel:true,
    }
  },
  methods: {

  },
  mounted() {
    loadBaiduMap()
      .then(() => {
        renderMap(this.$refs.map)
      })

  },
  beforeDestroy() {
    this.$store.commit("charts/clean");
  }
}

function loadBaiduMap() {
  if (document.getElementById('baiduMapApi')) {
    return new Promise((res, rej) => {
      res()
    })
  }
  const baiduMap = document.createElement('script')
  baiduMap.id = 'baiduMapApi'
  baiduMap.src = "http://api.map.baidu.com/getscript?v=2.0&ak=QBlDySuCDr4IfxS2BWcQ3hdXyIQQvBqj&services=&t=20180201111639"

  document.getElementsByTagName('head')[0].appendChild(baiduMap)
  return new Promise((res, rej) => {
    baiduMap.onload = baiduMap.onreadystatechange = function() {
      if (!this.readyState //这是FF的判断语句，因为ff下没有readyState这人值，IE的readyState肯定有值
        ||this.readyState == 'loaded'
        || this.readyState == 'complete' // 这是IE的判断语句
      )  res()
    };
  })
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
