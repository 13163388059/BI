<template lang="html">
  <div style="height:100%;width:100%" ref  = 'chart' >
  </div>
</template>

<script>
import installTheme from "../theme";

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
      text: "各路段计划维护量与实际维护量",
      subtext: "每年"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: ["计划维护量", "实际维护量"]
    },
    xAxis: [
      {
        type: "category",
        data: ["武英", "黄黄", "麻武"]
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "计划维护量",
        type: "bar",
        data: [1332, 1119, 1113]
      },
      {
        name: "实际维护量",
        type: "bar",
        data: [1122, 1091, 993]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

