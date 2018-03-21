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
      text: "纪委团委以及困难职工新增人数",
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
      data: ["困难职工数", "纪委", "团委"]
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
        name: "困难职工数",
        type: "line",
        smooth: true,
        data: [0, 0, 2, 0, 1]
      },
      {
        name: "纪委",
        type: "line",
        smooth: true,
        data: [15, 8, 17, 6, 9]
      },
      {
        name: "团委",
        type: "line",
        smooth: true,
        data: [39, 42, 56, 76, 32]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

