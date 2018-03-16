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
      text: "基层单位文件急办类型数量分布",
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
      data: ["急件", "特急"]
    },
    series: [
      {
        name: "管理处文件执行情况",
        type: "pie",
        data: [{ value: 135, name: "急件" }, { value: 38, name: "特急" }]
      }
    ]
  };
  myChart.setOption(option);
}
</script>

