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
      text: "资产存量情况"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: ["在用", "损坏", "闲置", "出租", "拟报废", "报废"]
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "土地",
        "房屋",
        "构筑物",
        "通用设备",
        "车辆",
        "专用设备",
        "文物和陈列品",
        "家具用具装具",
        "图书档案",
        "特种动植物",
        "无形资产"
      ]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        name: "在用",
        type: "line",
        stack: "总量",
        data: [30, 50, 302, 6000, 300, 4956, 210, 600, 956, 648, 265]
      },
      {
        name: "损坏",
        type: "line",
        stack: "总量",
        data: [0, 5, 100, 1000, 95, 1023, 32, 134, 99, 187, 65]
      },
      {
        name: "闲置",
        type: "line",
        stack: "总量",
        data: [20, 10, 124, 365, 26, 158, 36, 89, 264, 149, 49]
      },
      {
        name: "出租",
        type: "line",
        stack: "总量",
        data: [10, 16, 26, 298, 25, 126, 36, 264, 187, 97, 102]
      },
      {
        name: "拟报废",
        type: "line",
        stack: "总量",
        data: [0, 5, 21, 387, 24, 264, 64, 103, 121, 65, 78]
      },
      {
        name: "报废",
        type: "line",
        stack: "总量",
        data: [0, 3, 15, 380, 22, 245, 60, 97, 102, 35, 48]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

