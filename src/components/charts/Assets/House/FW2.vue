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
      text: "站所备选项目数量与总金额",
      subtext: "每年",
      x: "center"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      left: "left",
      data: ["项目数", "总金额(单位万元)"]
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
        name: "项目数",
        type: "bar",
        data: [230, 215, 201, 291, 191]
      },
      {
        name: "总金额(单位万元)",
        type: "bar",
        data: [520, 510, 500, 430, 390]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

