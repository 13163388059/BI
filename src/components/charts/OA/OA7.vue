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
      text: "管理处每月急办平均完成时间(分钟)",
      subtext: "月份",
      x: "center"
    },
    xAxis: {
      type: "category",
      data: [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月"
      ]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: [78, 86, 110, 96, 56, 23, 19, 90, 57, 114, 90, 78],
        type: "line"
      }
    ]
  };

  myChart.setOption(option);
}
</script>

