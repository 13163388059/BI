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
      text: "各路段路产设施分布情况",
      subtext: "每年"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: ["桥梁", "隧道", "涵洞", "边坡", "互通"]
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
        name: "桥梁",
        type: "bar",
        data: [1332, 1119, 1113]
      },
      {
        name: "隧道",
        type: "bar",
        data: [132, 119, 113]
      },
      {
        name: "涵洞",
        type: "bar",
        data: [3232, 3219, 3113]
      },
      {
        name: "边坡",
        type: "bar",
        data: [320, 190, 130]
      },
      {
        name: "互通",
        type: "bar",
        data: [32, 19, 13]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

