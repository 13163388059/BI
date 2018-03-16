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
      text: "各路段维护合同完成情况",
      subtext: "每年"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: ["合同总数", "已完成合同"]
    },
    xAxis: [
      {
        type: "category",
        data: ["武英", "黄黄", "麻武"]
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "合同总数",
        type: "bar",
        data: [132, 119, 154]
      },
      {
        name: "已完成合同",
        type: "bar",
        data: [128, 99, 121]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

