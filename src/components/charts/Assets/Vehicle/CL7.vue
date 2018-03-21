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
      text: "车辆年审费用"
    },
    tooltip: {
      trigger: "axis"
    },
    xAxis: {
      type: "category",
      data: ["鄂A55555", "鄂A56789", "鄂A66666", "鄂A88888", "鄂A47895"]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        name:'费用',
        data: [5500, 6000, 8000, 8500, 7000],
        type: "line"
      }
    ]
  };

  myChart.setOption(option);
}
</script>

