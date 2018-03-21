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
      text: "维修费排名前三的站所",
      subtext: "当年",
      x: "center"
    },
    tooltip: {
      trigger: "axis"
    },
    xAxis: [
      {
        type: "category",
        data: ["十堰西", "襄阳东", "六里坪"]
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "维修金额(单位万元)",
        type: "bar",
        data: [132, 119, 103]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

