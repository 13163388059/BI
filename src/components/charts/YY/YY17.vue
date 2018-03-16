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
      text: "各管理所每月免费车流量最低的三个管理所",
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
        data: ["武穴管理所", "蕲春管理所", "散花管理所"]
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "免费车流量",
        type: "bar",
        data: [192, 172, 183]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

