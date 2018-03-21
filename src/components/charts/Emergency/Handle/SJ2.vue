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
      text: "2017年12月20日事件处置进度",
      subtext: "当前",
      x:"center"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      left:'left',
      data: ["时间(秒)"]
    },
    grid: {
      x: 70,
      x2: 70
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: "category",
      data: ["实施预案", "事件定级", "处置确认", "先期处置", "接警上报"]
    },
    series: [
      {
        name: "时间(秒)",
        type: "bar",
        data: [360, 20, 10, 40, 15]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

