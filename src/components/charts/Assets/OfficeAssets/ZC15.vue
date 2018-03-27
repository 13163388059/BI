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
      text: "资产类别数量统计",
      subtext: '模拟数据,无需参考',
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    legend: {
      left:"right",
      data: ["在用", "损坏", "闲置", "出租", "拟报废", "报废"]
    },
    grid: {
      x: 40,
      y:60,
      x2: 40,
      y2:40
    },
    xAxis: [
      {
        type: "category",
        axisLabel: {
          interval: 0,
          rotate: 20,
          margin: 12
        },
        data: [
          "土地",
          "房屋",
          "构筑物",
          "通用设备",
          "车辆",
          "专用设备",
          "陈列品",
          "日常用具类",
          "图书档案",
          "特种动植物",
          "无形资产"
        ]
      }
    ],
    yAxis: [
      {
        type: "value",
        min: 0,
        interval: 200
      },
      {
        type: "value",
        min: 100,
        interval: 200
      }
    ],
    series: [
      {
        name: "在用",
        type: "bar",
        data: [30, 50, 302, 600, 300, 495, 210, 600, 956, 648, 265]
      },
      {
        name: "损坏",
        type: "bar",
        stack: "无法使用",
        data: [0, 5, 100, 100, 95, 123, 32, 134, 99, 187, 65]
      },
      {
        name: "闲置",
        type: "bar",
        stack: "可用",
        data: [20, 10, 124, 365, 26, 158, 36, 89, 264, 149, 49]
      },
      {
        name: "出租",
        type: "bar",
        stack: "可用",
        data: [10, 16, 26, 298, 25, 126, 36, 264, 187, 97, 102]
      },
      {
        name: "拟报废",
        type: "bar",
        stack: "无法使用",
        data: [0, 5, 21, 387, 24, 264, 64, 103, 121, 65, 78]
      },
      {
        name: "报废",
        type: "bar",
        stack: "无法使用",
        data: [0, 3, 15, 380, 22, 245, 60, 97, 102, 35, 48]
      },
      {
        name: "金额(单位万元)",
        type: "line",
        yAxisIndex: 1,
        data: [200, 220, 330, 850, 630, 1020, 430, 1340, 2300, 1650, 1200, 620]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

