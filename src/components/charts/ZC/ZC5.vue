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
      text: "资产分布情况",
      subtext: ""
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    legend: {
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
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: "category",
      data: [
        "资产管理科",
        "信息监控中心",
        "收费稽查科",
        "工程养护科",
        "随州管理所",
        "云梦管理所"
      ]
    },
    series: [
      {
        name: "土地",
        type: "bar",
        data: [15, 13, 26, 35, 45, 87]
      },
      {
        name: "房屋",
        type: "bar",
        data: [28, 45, 38, 67, 39, 58]
      },
      {
        name: "构筑物",
        type: "bar",
        data: [128, 98, 85, 67, 95, 58]
      },
      {
        name: "通用设备",
        type: "bar",
        data: [1982, 687, 369, 594, 298, 750]
      },
      {
        name: "车辆",
        type: "bar",
        data: [300, 25, 38, 45, 18, 67]
      },
      {
        name: "专用设备",
        type: "bar",
        data: [1598, 486, 367, 289, 459, 278]
      },
      {
        name: "文物和陈列品",
        type: "bar",
        data: [50, 37, 28, 48, 18, 37]
      },
      {
        name: "家具用具装具",
        type: "bar",
        data: [1201, 987, 366, 248, 105, 208]
      },
      {
        name: "图书档案",
        type: "bar",
        data: [507, 111, 204, 158, 165, 269]
      },
      {
        name: "特种动植物",
        type: "bar",
        data: [100, 57, 36, 92, 113, 99]
      },
      {
        name: "无形资产",
        type: "bar",
        data: [200, 158, 106, 97, 88, 69]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

