<template lang="html">
  <div style="height:100%;width:100%" ref  = 'chart' >
  </div>
</template>

<script>
import echarts from "echarts";
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

    _this.$store.commit("charts/reset", [myChart]);

    window.onresize = function() {
      _this.$store.commit("charts/resize");
    };
  }
};

function init(myChart) {
  const option = {
    title: {
      text: "2017年每月4大客服类型电话数趋势占比"
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: ["咨询类", "求助类", "投诉类", "其它类"]
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
          "1月份",
          "2月份",
          "3月份",
          "4月份",
          "5月份",
          "6月份",
          "7月份",
          "8月份",
          "9月份",
          "10月份",
          "11月份",
          "12月份"
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
        name: "咨询类",
        type: "bar",
        stack: "电话数",
        data: [
          2463,
          2914,
          2286,
          1913,
          1937,
          1198,
          1122,
          1633,
          2781,
          2836,
          1922,
          1654
        ]
      },
      {
        name: "求助类",
        type: "bar",
        stack: "电话数",
        data: [
          1358,
          1607,
          1260,
          1055,
          1068,
          661,
          619,
          900,
          1533,
          1564,
          1060,
          912
        ]
      },
      {
        name: "投诉类",
        type: "bar",
        stack: "电话数",
        data: [49, 58, 46, 38, 39, 24, 23, 33, 56, 57, 39, 33]
      },
      {
        name: "其它类",
        type: "bar",
        stack: "电话数",
        data: [
          2099,
          2483,
          1948,
          1630,
          1651,
          1021,
          956,
          1391,
          2370,
          2417,
          1638,
          1409
        ]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

