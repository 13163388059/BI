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
      text: "党纪团各成员数",
      subtext: "当年",
      x: "center"
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: "vertical",
      left: "left",
      top: "middle",
      data: ["党委", "纪委", "团委"]
    },
    series: [
      {
        name: "人数",
        type: "pie",
        radius: "55%",
        center: ["50%", "60%"],
        data: [
          { value: 135, name: "党委" },
          { value: 110, name: "纪委" },
          { value: 535, name: "团委" }
        ]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

