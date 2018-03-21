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
      text: "各站所故障分布情况"
    },
    tooltip: {
      trigger: "axis"
    },
    xAxis: {
      type: "category",
      data: [
        "汪集管理所",
        "罗田管理所",
        "武英养护站",
        "大广北路政一大队",
        "黄黄养护站",
        "散花管理所"
      ]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: [200, 150, 100, 130, 50, 32],
        type: "bar"
      }
    ]
  };
  myChart.setOption(option);
}
</script>

