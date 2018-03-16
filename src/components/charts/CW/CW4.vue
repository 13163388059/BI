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
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐

        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },

    legend: {
      data: ["2016", "2017", "2018"]
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月"
        ]
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "2016",

        type: "bar",
        data: [720, 1532, 251, 332, 590, 230, 720, 612, 333, 300, 100, 680]
      },

      {
        name: "2017",
        type: "bar",
        data: [1220, 832, 251, 332, 690, 630, 320, 612, 333, 300, 100, 680]
      },
      {
        name: "2018",
        type: "bar",
        data: [720, 1132, 951, 332, 290, 730, 320, 1112, 333, 300, 100, 680]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

