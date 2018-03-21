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
      text: "车辆油耗统计图",
      x: "center"
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: "vertical",
      left: "left",
      data: ["鄂A55555", "鄂A56789", "鄂A66666", "鄂A88888", "鄂A47895"]
    },
    series: [
      {
        name: "油耗",
        type: "pie",
        data: [
          { value: 5500, name: "鄂A55555" },
          { value: 6000, name: "鄂A56789" },
          { value: 7100, name: "鄂A66666" },
          { value: 8500, name: "鄂A88888" },
          { value: 7100, name: "鄂A47895" }
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

