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
      text: "应急维修项目情况",
      subtext: "当年",
      x: "center"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      left: "left",
      data: ["项目数", "金额(单位万元)"]
    },
    xAxis: [
      {
        type: "category",
        data: ["十堰西", "上津", "十漫", "青曲", "武当山", "谷城", "龙王"]
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "项目数",
        type: "bar",
        data: [332, 219, 303, 201, 298, 289, 312]
      },
      {
        name: "金额(单位万元)",
        type: "bar",
        data: [132, 119, 103, 101, 98, 89, 112]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

