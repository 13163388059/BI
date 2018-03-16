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
      text: "基层单位每月收发文数与归档数对应",
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
          2498,
          986,
          3678,
          1896,
          2986,
          113,
          2254,
          4178,
          5101,
          2121,
          3326,
          1112
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
          1498,
          586,
          2978,
          1396,
          2586,
          813,
          1654,
          3778,
          4101,
          2121,
          2326,
          912
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

