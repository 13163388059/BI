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
      text: "管理处当月急办，特急平均完成时间对比",
      subtext: "月份"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: ["急办平均完成时间", "特急平均完成时间"]
    },
    xAxis: [
      {
        type: "category",
        data: ["急办平均完成时间", "特急平均完成时间"]
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "平均完成时间",
        type: "bar",
        data: [93, 49],
        markLine: {
          data: [{ type: "average", name: "平均值" }]
        }
      }
    ]
  };

  myChart.setOption(option);
}
</script>

