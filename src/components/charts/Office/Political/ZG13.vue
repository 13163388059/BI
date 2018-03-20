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
      text: "党委人员类型新增数",
      subtext: "每年",
      x: "center"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      left: "left",
      data: ["入党数", "入党积极分子数", "发展对象数"]
    },
    grid: {
      x: 70,
      x2: 70
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
        name: "入党数",
        type: "line",
        smooth: true,
        data: [19, 16, 15, 13, 3]
      },
      {
        name: "入党积极分子数",
        type: "line",
        smooth: true,
        data: [22, 32, 25, 31, 9]
      },
      {
        name: "发展对象数",
        type: "line",
        smooth: true,
        data: [55, 43, 31, 55, 14]
      }
    ]
  };
  myChart.setOption(option);
}
</script>

