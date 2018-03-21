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
      text: "党纪团每年人数",
      subtext: "每年",
      x: "center"
    },
    tooltip: {
      trigger: "axis"
    },
    grid: {
      x: 70,
      x2: 70
    },
    legend: {
      left: "left",
      data: ["党委", "纪委", "团委"]
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["2014", "2015", "2016", "2017", "2018"]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        name: "党委",
        type: "line",
        smooth: true,
        data: [145, 119, 122, 108, 135]
      },
      {
        name: "纪委",
        type: "line",
        smooth: true,
        data: [102, 88, 92, 76, 110]
      },
      {
        name: "团委",
        type: "line",
        smooth: true,
        data: [435, 498, 582, 515, 535]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

