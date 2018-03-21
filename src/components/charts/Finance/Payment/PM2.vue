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
      text: "年度支付计划数量",
      subtext: "每年",
      x: "center"
    },
    tooltip: {
      trigger: "axis"
    },
    grid: {
      x: 70,
      x2: 70
    },
    legend: {
      left:'left',
      data: ["数量"]
    },
    xAxis: [
      {
        type: "category",
        data: ["2015", "2016", "2017", "2018"]
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "数量",
        type: "bar",
        data: [400, 266, 216, 526]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

