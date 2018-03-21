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
      text: "2018年耗材消耗情况",
      subtext: "当年",
      x: "center"
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: "vertical",
      left: "left",
      top: "middle",
      data: [
        "通用设备",
        "车辆",
        "专用设备",
        "家具用具装具",
        "构筑物",
        "图书档案"
      ]
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: "55%",
        center: ["50%", "60%"],
        data: [
          { value: 112365, name: "通用设备" },
          { value: 213650, name: "车辆" },
          { value: 136587, name: "专用设备" },
          { value: 98654, name: "家具用具装具" },
          { value: 111230, name: "构筑物" },
          { value: 98752, name: "图书档案" }
        ]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

