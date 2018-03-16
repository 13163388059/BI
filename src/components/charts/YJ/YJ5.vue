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
      text: "2017年各路段客服电话总数趋势"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: ["麻武高速", "武英高速", "黄黄高速"]
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "1月份",
        "2月份",
        "3月份",
        "4月份",
        "5月份",
        "6月份",
        "7月份",
        "8月份",
        "9月份",
        "10月份",
        "11月份",
        "12月份"
      ]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        name: "麻武高速",
        type: "line",
        stack: "电话数",
        data: [866, 985, 899, 640, 648, 535, 455, 625, 977, 1010, 667, 589]
      },
      {
        name: "武英高速",
        type: "line",
        stack: "电话数",
        data: [798, 926, 691, 634, 642, 268, 365, 432, 876, 912, 658, 559]
      },
      {
        name: "黄黄高速",
        type: "line",
        stack: "电话数",
        data: [805, 1010, 701, 644, 652, 398, 305, 580, 935, 921, 602, 510]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

