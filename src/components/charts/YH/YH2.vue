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
      text: "每年各路段维护次数",
      subtext: "每年"
    },
    xAxis: {
      type: "category",
      data: ["武英", "黄黄", "麻武"]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: [11011, 13421, 14701],
        type: "line"
      }
    ]
  };

  myChart.setOption(option);
}
</script>

