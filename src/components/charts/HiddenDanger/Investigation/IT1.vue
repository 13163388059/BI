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
      text: "历年隐患数量趋势图",
      subtext: "每年",
      x: "center"
    },
    xAxis: {
      type: "category",
      data: [
        "2012年",
        "2013年",
        "2014年",
        "2015年",
        "2016年",
        "2017年",
        "2018年"
      ]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: [345, 234, 125, 214, 142, 267, 201],
        type: "line",
        smooth: true
      }
    ]
  };

  myChart.setOption(option);
}
</script>

