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
      text: "2017年黄黄高速按路段事件类型占比"
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: ["交通事故", "隧道事故", "恶劣天气", "其它事故"]
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: ["麻武高速", "武英高速", "黄黄高速"]
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "交通事故",
        type: "bar",
        stack: "事件数",
        data: [75, 46, 65]
      },
      {
        name: "隧道事故",
        type: "bar",
        stack: "事件数",
        data: [35, 27, 5]
      },
      {
        name: "恶劣天气",
        type: "bar",
        stack: "事件数",
        data: [44, 32, 40]
      },
      {
        name: "其它事故",
        type: "bar",
        stack: "事件数",
        data: [19, 17, 30]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

