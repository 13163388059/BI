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
      text: "ETC/MTC收入",
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
      data: ["ETC(单位万元)", "MTC(单位万元)"]
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        data: [
          { value: 233, name: "ETC(单位万元)" },
          { value: 7310, name: "MTC(单位万元)" }
        ]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

