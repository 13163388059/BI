<template lang="html">
  <div style="height:100%;width:100%" ref  = 'chart' >
  </div>
</template>

<script>
import installTheme from "../../theme";

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
      text: "未完全查阅的通知公告",
      subtext: "当日",
      x: "center"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      x: "left",
      data: ["查阅量", "全部人数"]
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
        data: [11, 19, 14],
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
        name: "全部人数",
        type: "bar",
        data: [15, 20, 23],
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

