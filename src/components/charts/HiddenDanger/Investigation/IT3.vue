<template lang="html">
  <div style="height:100%;width:100%" ref  = 'chart' >
  </div>
</template>

<script>
import installTheme from "../../theme";

installTheme({}, echarts);

export default {
  name: "page-test",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    const myChart = echarts.init(this.$refs.chart, "darkk"),
      _this = this;

    init(myChart);

    _this.$store.commit("charts/push", myChart);
  }
};

function init(myChart) {
  const option = {
    title: {
      text: "年度各单位隐患排查量",
      subtext: "每年",
      x: "center"
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    
    xAxis: [
      {
        type: "category",
        data: [
          "某单位一",
          "某单位二",
          "某单位三",
          "某单位四",
          "某单位五",
          "某单位六",
          "某单位七"
        ],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "数量",
        type: "bar",
        barWidth: "60%",
        data: [10, 52, 200, 334, 390, 330, 220]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

