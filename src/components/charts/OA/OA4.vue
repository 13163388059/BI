<template lang="html">
  <div style="height:100%;width:100%" ref  = 'chart' >
  </div>
</template>

<script>
import echarts from "echarts";
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

    _this.$store.commit("charts/reset", [myChart]);

    window.onresize = function() {
      _this.$store.commit("charts/resize");
    };
  }
};

function init(myChart) {
  const option = {
    title: {
      text: "基层单位文件执行情况",
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
      data: ["待办", "已办"]
    },
    series: [
      {
        name: "管理处文件执行情况",
        type: "pie",
        data: [{ value: 135, name: "待办" }, { value: 510, name: "已办" }]
      }
    ]
  };
  myChart.setOption(option);
}
</script>

