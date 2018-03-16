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
      text: "当天未完全查阅的通知公告",
      subtext: "当日"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: ["查阅百分比"]
    },
    xAxis: [
      {
        type: "category",
        data: ["办公用品查存通知", "财务关于报销通知", "收费机稽查课通知"]
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "查阅量",
        type: "bar",
        data: [11, 19, 14]
      },
      {
        name: "全部人数",
        type: "bar",
        data: [15, 20, 23]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

