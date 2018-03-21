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
      text: "2017年度机电设备维修统计分布表",
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
        "配电照明系统",
        "现场配电照明系统",
        "通信系统",
        "监控系统",
        "收费系统"
      ]
    },
    series: [
      {
        name: "占比",
        type: "pie",
        data: [
          { value: 200, name: "配电照明系统" },
          { value: 50, name: "现场配电照明系统" },
          { value: 150, name: "通信系统" },
          { value: 100, name: "监控系统" },
          { value: 135, name: "收费系统" }
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

