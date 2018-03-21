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
      text: "2017年事件总处置时长(小时)",
      subtext: "当年",
      x: "center"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      left: "left",
      data: ["时长"]
    },
    grid: {
      x: 70,
      x2: 70
    },
    xAxis: {
      title: "",
      type: "category",
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        name:'时长',
        data: [48, 85, 37, 35, 40, 55, 16, 6, 12, 45, 25, 28],
        type: "bar"
      }
    ]
  };

  myChart.setOption(option);
}
</script>

