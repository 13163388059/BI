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
      text: "各路段计划维护金额与实际维护金额",
      subtext: "每年"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: ["计划维护金额", "实际维护金额"]
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
        name: "计划维护金额",
        type: "bar",
        data: [332, 219, 213]
      },
      {
        name: "实际维护金额",
        type: "bar",
        data: [322, 191, 193]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

