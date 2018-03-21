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
      text: "年度机电品牌故障率"
    },
    tooltip: {
      trigger: "axis"
    },
    xAxis: {
      type: "category",
      data: ["美电贝尔", "科华", "伏尔", "美的"]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: [200, 150, 100, 130, 50],
        type: "line"
      }
    ]
  };
  myChart.setOption(option);
}
</script>

