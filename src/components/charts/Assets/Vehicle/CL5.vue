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
      text: "车辆维修记录统计图",
      x: "center"
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: "vertical",
      left: "left",
      data: ["鄂A1111", "鄂ACR327", "鄂A55565", "鄂A33250", "鄂A32101"]
    },
    series: [
      {
        name: "维修次数",
        type: "pie",
        data: [
          { value: 5, name: "鄂A1111" },
          { value: 6, name: "鄂ACR327" },
          { value: 8, name: "鄂A55565" },
          { value: 8, name: "鄂A33250" },
          { value: 7, name: "鄂A32101" }
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

