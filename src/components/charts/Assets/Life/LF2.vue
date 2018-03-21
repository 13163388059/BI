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
      text: "各单位服装发放数量统计图",
      subtext: "每年",
      x: "center"
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: [
      {
        type: "category",
        data: [
          "单位一",
          "单位二",
          "单位三",
          "单位四",
          "单位五",
          "单位六",
          "单位七"
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
        data: [132, 98, 145, 125, 342, 246, 220]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

