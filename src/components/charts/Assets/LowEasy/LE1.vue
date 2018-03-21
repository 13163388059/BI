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
      text: "每年消耗金额与购入金额",
      subtext: "每年",
      x: "center"
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      x: 70,
      x2: 70
    },
    legend: {
      left:'left',
      data: ["消耗", "购置"]
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
        name: "消耗",
        type: "bar",
        data: [109560, 123697, 151123, 163587, 186524]
      },
      {
        name: "购置",
        type: "bar",
        data: [112368, 143697, 168574, 182361, 200015]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

