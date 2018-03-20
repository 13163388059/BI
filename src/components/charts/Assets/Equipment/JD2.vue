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
      text: "各路段故障分布情况"
    },
    tooltip: {
      trigger: "axis"
    },
    xAxis: {
      type: "category",
      data: ["武英路段", "麻武路段", "黄黄路段", "大广北路段", "黄梅南段"]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: [200, 150, 100, 130, 160],
        type: "bar"
      }
    ]
  };

  myChart.setOption(option);
}
</script>

