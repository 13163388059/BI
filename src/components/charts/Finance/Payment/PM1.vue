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
      text: "每月部门支付计划数量",
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
      left: "left",
      width: "350px",
      data: [
        "处领导",
        "办公室",
        "人事劳动科",
        "计划财务科",
        "资产管理科",
        "工程养护科",
        "政工科"
      ]
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
        name: "处领导",
        type: "bar",
        data: [20, 12, 0, 5, 7, 11, 0, 0, 22, 15, 4, 13]
      },
      {
        name: "办公室",
        type: "bar",

        data: [10, 12, 11, 13, 9, 23, 21, 20, 10, 40, 30, 36]
      },
      {
        name: "人事劳动科",
        type: "bar",

        data: [20, 18, 19, 24, 29, 17, 31, 15, 10, 0, 0, 12]
      },
      {
        name: "计划财务科",
        type: "bar",

        data: [15, 22, 0, 0, 10, 11, 6, 4, 8, 16, 21, 17]
      },
      {
        name: "资产管理科",
        type: "bar",
        data: [12, 18, 14, 10, 16, 16, 15, 14, 11, 13, 14, 7]
      },
      {
        name: "工程养护科",
        type: "bar",
        barWidth: 5,

        data: [20, 32, 1, 7, 10, 11, 12, 21, 11, 5, 7, 9]
      },
      {
        name: "政工科",
        type: "bar",

        data: [12, 13, 10, 13, 29, 23, 22, 12, 18, 0, 6, 9]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

