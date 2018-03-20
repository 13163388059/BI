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
      text: "路段巡查类型分布情况",
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
      data: ["日常巡查", "夜间巡查", "桥梁巡查", "涵洞巡查", "隧道巡查"]
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        data: [
          { value: 335, name: "日常巡查" },
          { value: 19, name: "夜间巡查" },
          { value: 38, name: "桥梁巡查" },
          { value: 20, name: "涵洞巡查" },
          { value: 48, name: "隧道巡查" }
        ]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

