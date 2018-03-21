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
      text: "各单位隐患整改情况",
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
    legend: {
      left: "left",
      data: ["已整改", "未整改"]
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
        ]
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "已整改",
        type: "bar",
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: "未整改",
        type: "bar",
        data: [120, 132, 101, 134, 90, 230, 210]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

