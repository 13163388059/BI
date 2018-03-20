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
      text: "团委每年新增数",
      subtext: "当年",
      x: "center"
    },
    tooltip: {
      trigger: "axis"
    },
    xAxis: {
      type: "category",
      data: ["2016", "2017", "2018"]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        name: "人数",
        data: [56, 76, 32],
        type: "line",
        smooth: true
      }
    ]
  };
  myChart.setOption(option);
}
</script>

