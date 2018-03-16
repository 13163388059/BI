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
      text: "党委成员类别分布",
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
      data: ["党员", "流动党员", "入党对象", "入党积极分子"]
    },
    series: [
      {
        name: "人数",
        type: "pie",
        data: [
          { value: 335, name: "党员" },
          { value: 310, name: "流动党员" },
          { value: 234, name: "入党对象" },
          { value: 135, name: "入党积极分子" }
        ]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

