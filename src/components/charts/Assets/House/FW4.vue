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
      text: "处机关与站所合同情况",
      subtext: "每年",
      x: "center"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      left: "left",
      width: "280px",
      data: ["合同数", "完成合同数", "总金额(单位万元)", "完成金额(单位万元)"]
    },
    xAxis: [
      {
        type: "category",
        data: ["处机关", "站所"]
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "合同数",
        type: "bar",
        data: [132, 69]
      },
      {
        name: "完成合同数",
        type: "bar",
        data: [113, 59]
      },
      {
        name: "总金额(单位万元)",
        type: "bar",
        data: [320, 190]
      },
      {
        name: "完成金额(单位万元)",
        type: "bar",
        data: [230, 119]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

