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
      text: "项目库总数",
      subtext: "每年",
      x: "center"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      left: "left",
      data: ["数量(件)"]
    },
    xAxis: [
      {
        type: "category",
        data: ["2014", "2015", "2016", "2017", "2018"]
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "数量(件)",
        type: "bar",
        data: [703, 925, 985, 1005, 1200]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

