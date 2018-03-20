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
      text: "每年维修费用最高的三的站所"
    },
    tooltip: {
      trigger: "axis"
    },
    xAxis: {
      type: "category",
      data: ["资产管理科", "信息监控中心", "工程养护科"]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        name: "维修费用",
        data: [11000, 10000, 9876],
        type: "bar"
      }
    ]
  };

  myChart.setOption(option);
}
</script>

