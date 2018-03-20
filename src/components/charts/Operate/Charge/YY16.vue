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
      text: "各管理所每月收入最高的三个管理所",
      subtext: "当前"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: ["收入"]
    },
    xAxis: [
      {
        type: "category",
        data: ["黄梅南管理所", "小池管理所", "龙感湖管理所"]
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "通行费",
        type: "bar",
        data: [5112987, 5103043, 4447323]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

