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
      text: "党纪工团各成员数",
      subtext: "当前",
      x: "center"
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: "vertical",
      left: "left",
      data: ["党委", "纪委", "工会", "团委"]
    },
    series: [
      {
        name: "人数",
        type: "pie",
        data: [
          { value: 135, name: "党委" },
          { value: 110, name: "纪委" },
          { value: 334, name: "工会" },
          { value: 535, name: "团委" }
        ]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

