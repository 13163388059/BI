<template lang="html">
  <div style="height:100%;width:100%" ref  = 'chart' >
  </div>
</template>

<script>
import installTheme from "../theme";

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
      text: "2017年每月事件类型事件数趋势"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: ["交通事故", "隧道安全", "恶劣天气", "其它事件"]
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月"
      ]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        name: "交通事故",
        type: "line",
        stack: "事件数",
        data: [17, 24, 15, 22, 18, 10, 19, 23, 26, 23, 26, 30]
      },
      {
        name: "隧道安全",
        type: "line",
        stack: "事件数",
        data: [13, 11, 9, 16, 10, 8, 12, 14, 9, 15, 13, 16]
      },
      {
        name: "恶劣天气",
        type: "line",
        stack: "事件数",
        data: [26, 24, 23, 19, 20, 12, 13, 16, 14, 11, 14, 22]
      },
      {
        name: "其它事件",
        type: "line",
        stack: "事件数",
        data: [22, 30, 20, 21, 25, 17, 24, 26, 21, 27, 21, 23]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

