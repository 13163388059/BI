<template lang="html">
  <div style="height:100%;width:100%" ref  = 'chart' >
  </div>
</template>

<script>
import echarts from "echarts";
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

    _this.$store.commit("charts/reset", [myChart]);

    window.onresize = function() {
      _this.$store.commit("charts/resize");
    };
  }
};

function init(myChart) {
  const option = {
    title: {
      text: "每年各路段新增维护合同数量",
      subtext: "每年"
    },
    legend: {
      data: ["武英", "黄黄", "麻武"]
    },
    xAxis: {
      type: "category",
      data: [2016, 2017, 2018]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        name: "武英",
        data: [138, 125, 192],
        type: "line"
      },

      {
        name: "黄黄",
        data: [158, 145, 182],
        type: "line"
      },

      {
        name: "麻武",
        data: [178, 165, 202],
        type: "line"
      }
    ]
  };

  myChart.setOption(option);
}
</script>

