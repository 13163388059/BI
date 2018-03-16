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
      text: "每年基层单位收发文数",
      subtext: "每年"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: ["收文量", "发文量"]
    },
    xAxis: [
      {
        type: "category",
        data: ["2016", "2017", "2018"]
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "收文量",
        type: "bar",
        data: [2378, 1698, 1892],
        markPoint: {
          data: [
            { type: "max", name: "最大值" },
            { type: "min", name: "最小值" }
          ]
        },
        markLine: {
          data: [{ type: "average", name: "平均值" }]
        }
      },
      {
        name: "发文量",
        type: "bar",
        data: [2480, 2290, 1793],
        markLine: {
          data: [{ type: "average", name: "平均值" }]
        }
      }
    ]
  };
  myChart.setOption(option);
}
</script>

