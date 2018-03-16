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
      text: "管理处每月收发文数与归档数对应",
      subtext: "每月"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: ["收发文数", "归档数"]
    },
    xAxis: [
      {
        type: "category",
        data: [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月"
        ]
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "收发文数",
        type: "bar",
        data: [
          3498,
          1986,
          4678,
          2896,
          3986,
          1113,
          3254,
          5178,
          6101,
          3121,
          4326,
          2112
        ],
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
        name: "归档数",
        type: "bar",
        data: [
          2498,
          1586,
          3978,
          2396,
          3586,
          913,
          2654,
          4778,
          5101,
          3121,
          3326,
          1912
        ],
        markPoint: {
          data: [
            { type: "max", name: "最大值" },
            { type: "min", name: "最小值" }
          ]
        },
        markLine: {
          data: [{ type: "average", name: "平均值" }]
        }
      }
    ]
  };

  myChart.setOption(option);
}
</script>

