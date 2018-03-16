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
      text: "党委培养人数排名前三",
      subtext: "当前"
    },
    tooltip: {
      trigger: "axis"
    },
    xAxis: [
      {
        type: "category",
        data: ["李兴东", "张卉", "郭拓"]
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "培养人数",
        type: "bar",
        data: [12, 9, 15]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

