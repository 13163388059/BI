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
      text: "项目库年度月份总数",
      subtext: "每月",
      x: "center"
    },
    tooltip: {
      trigger: "axis"
    },
    grid: {
      x: 70,
      x2: 70
    },
    legend: {
      left: "left",
      width:'250px',
      data: ["2014", "2015", "2016", "2017", "2018"]
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
    xAxis: [
      {
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
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "2015",
        type: "bar",
        data: [40, 49, 70, 232, 256, 76, 13, 162, 36, 20, 64, 33]
      },
      {
        name: "2016",
        type: "bar",
        data: [26, 59, 90, 24, 28, 70, 175, 122, 47, 18, 60, 23]
      },
      {
        name: "2017",
        type: "bar",
        data: [21, 49, 50, 74, 68, 85, 35, 212, 77, 68, 30, 53]
      },
      {
        name: "2018",
        type: "bar",
        data: [56, 29, 20, 44, 48, 90, 185, 12, 107, 181, 50, 73]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

