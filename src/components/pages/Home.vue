<template lang="html">
  <div style="height:100%;width:100%" >
    <div class="container" style="height:100%;width:60%">
      <div class="item">
        <div style="height:100%;width:100%" ref= 'map'></div>
      </div>
    </div>
    <div class="container" style="height:100%;width:40%">
      <div class="item">
        <div style="height:100%;width:100%" >
          <div class="container" style="height:10%;width:100%">
            <div class="item">
              <div style="color:#ffffff">
                <div style="margin: 10px">襄阳西管理所</div>
                <div style="margin: 10px">汉十高速公路管理处襄阳西管理所地处素有"南船北马，七省通衢"之称的三国历史名城襄阳古城之北。作为城市名片,管理所秉承”千里汉十温馨相伴”的服务理念,努力营造温馨和谐的通行环境,服务地方经济民生,摸索创建出以“善为治道”文化体系为引领的“悦襄阳”文化子品牌——“心向阳,乐于奉献,快乐工作,快乐生活"。在品牌文化的指引下,团队凝聚力不断增强,通行环境不断优化,服务质量不断提升。管理所自主研发的“前置式ETC三系统收费模式”走在全国高路系统前列，沿袭多年独具特色的“女子收费班”被社会各界广泛认可，荣获“全国巾帼文明示范岗”荣誉称号，用行动诠释着名城襄阳浓郁厚重的文化内涵。</div>
              </div>
            </div>
          </div>
          <div class="container" style="height:20%;width:100%">
            <div class="item">
              <div>22222</div>
            </div>
          </div>
          <div class="container" style="height:70%;width:100%">
            <div class="item">
              <div>3333</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bi-home",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    const baiduMap = document.createElement("script");
    baiduMap.src =
      "http://api.map.baidu.com/api?v=2.0&ak=QBlDySuCDr4IfxS2BWcQ3hdXyIQQvBqj";
    baiduMap.onload = () => {
      loadMap(this.$refs.map);
    };

    document.getElementsByTagName("head")[0].appendChild(baiduMap);
  },
  beforeDestroy() {
    this.$store.commit("charts/clean");
  }
};

function loadMap(dom) {
  const map = new BMap.Map(dom);
  let point = new BMap.Point(116.404, 39.915);

  map.setMapStyle({
    styleJson: [
      {
        featureType: "water",
        elementType: "all",
        stylers: {
          color: "#021019"
        }
      },
      {
        featureType: "highway",
        elementType: "geometry.fill",
        stylers: {
          color: "#000000"
        }
      },
      {
        featureType: "highway",
        elementType: "geometry.stroke",
        stylers: {
          color: "#147a92"
        }
      },
      {
        featureType: "arterial",
        elementType: "geometry.fill",
        stylers: {
          color: "#000000"
        }
      },
      {
        featureType: "arterial",
        elementType: "geometry.stroke",
        stylers: {
          color: "#0b3d51"
        }
      },
      {
        featureType: "local",
        elementType: "geometry",
        stylers: {
          color: "#000000"
        }
      },
      {
        featureType: "land",
        elementType: "all",
        stylers: {
          color: "#08304b"
        }
      },
      {
        featureType: "railway",
        elementType: "geometry.fill",
        stylers: {
          color: "#000000"
        }
      },
      {
        featureType: "railway",
        elementType: "geometry.stroke",
        stylers: {
          color: "#08304b"
        }
      },
      {
        featureType: "subway",
        elementType: "geometry",
        stylers: {
          lightness: -70
        }
      },
      {
        featureType: "building",
        elementType: "geometry.fill",
        stylers: {
          color: "#000000"
        }
      },
      {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: {
          color: "#857f7f"
        }
      },
      {
        featureType: "all",
        elementType: "labels.text.stroke",
        stylers: {
          color: "#000000"
        }
      },
      {
        featureType: "building",
        elementType: "geometry",
        stylers: {
          color: "#022338"
        }
      },
      {
        featureType: "green",
        elementType: "geometry",
        stylers: {
          color: "#062032"
        }
      },
      {
        featureType: "boundary",
        elementType: "all",
        stylers: {
          color: "#1e1c1c"
        }
      },
      {
        featureType: "manmade",
        elementType: "geometry",
        stylers: {
          color: "#022338"
        }
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: {
          visibility: "off"
        }
      },
      {
        featureType: "all",
        elementType: "labels.icon",
        stylers: {
          visibility: "off"
        }
      },
      {
        featureType: "land",
        elementType: "all",
        stylers: {
          color: "#232f3bff",
          visibility: "on"
        }
      }
    ]
  });
  map.centerAndZoom(point, 10);
}
</script>

<style lang="css" scoped>
.container {
  float: left;
  position: relative;
}

.padding {
  padding: 0px;
}

.item {
  width: 100%;
  height: 100%;
  padding: 0px;
}

.item > div {
  width: 100%;
  height: 100%;
}

.block {
  /* background-color: #20252b; */
  background: linear-gradient(to right, #242e3a, #242e3a);
  /* box-shadow: 0 3px 8px -1 rgba(0, 0, 0, 0.4); */
  border-radius: 0px;
  position: relative;
}

.color::after {
  content: "";
  position: absolute;
  display: block;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
}

.color1::after {
  background: linear-gradient(to right, #898579, #898579);
}
.color2::after {
  background: linear-gradient(to right, #4e3956, #392b3c);
}
.color3::after {
  background: linear-gradient(to right, #684c58, #684c58);
}
.color4::after {
  background: linear-gradient(to right, #898579, #898579);
}
</style>
