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
      text: "资产类别统计",
      subtext: "当前",
      x: "center"
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: "vertical",
      left: "left",
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
    series: [
      {
        name: "访问来源",
        type: "pie",
        data: [
          { value: 15, name: "土地" },
          { value: 61, name: "房屋" },
          { value: 266, name: "构筑物" },
          { value: 7821, name: "通用设备" },
          { value: 100, name: "车辆" },
          { value: 1187, name: "专用设备" },
          { value: 66, name: "文物和陈列品" },
          { value: 4364, name: "家具用具装具" },
          { value: 18, name: "图书档案" },
          { value: 55, name: "特种动植物" },
          { value: 19, name: "无形资产" }
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  };

  myChart.setOption(option);
}
</script>

