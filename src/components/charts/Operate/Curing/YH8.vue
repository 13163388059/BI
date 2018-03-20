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
      text: "每年每路段巡查情况",
      subtext: "每年"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: ["武英巡查次数", "黄黄巡查次数", "麻武巡查次数"]
    },
    xAxis: {
      type: "category",
      data: [2016, 2017, 2018]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        name: "武英巡查次数",
        data: [338, 325, 392],
        type: "line"
      },

      {
        name: "黄黄巡查次数",
        data: [358, 345, 382],
        type: "line"
      },

      {
        name: "麻武巡查次数",
        data: [378, 365, 372],
        type: "line"
      }
    ]
  };

  myChart.setOption(option);
}
</script>

