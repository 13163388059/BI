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
      text: "新增备选项目数量与金额情况",
      subtext: "每年",
      x: "center"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      left: "left",
      width: "50px",
      data: ["项目数量", "项目金额(单位万元)"]
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [2014, 2015, 2016, 2017, 2018]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        name: "项目数量",
        type: "line",
        smooth: true,
        data: [198, 230, 210, 334, 167]
      },
      {
        name: "项目金额(单位万元)",
        type: "line",
        smooth: true,
        data: [130, 142, 110, 134, 67]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

