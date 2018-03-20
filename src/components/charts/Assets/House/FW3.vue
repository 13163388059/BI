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
      text: "备选项目完成情况",
      subtext: "当年",
      x: "center"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      left: "left",
      width: "50px",
      data: ["项目数", "总金额(单位万元)"]
    },
    xAxis: [
      {
        type: "category",
        data: ["未开始", "未完成", "已完成"]
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "项目数",
        type: "bar",
        data: [132, 19, 319]
      },
      {
        name: "总金额(单位万元)",
        type: "bar",
        data: [130, 69, 290]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

