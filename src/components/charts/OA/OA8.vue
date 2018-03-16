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
      text: "基层单位每月急办平均完成时间(分钟)",
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
        data: [72, 58, 112, 86, 58, 43, 99, 70, 87, 44, 80, 98],
        type: "line"
      }
    ]
  };

  myChart.setOption(option);
}
</script>

