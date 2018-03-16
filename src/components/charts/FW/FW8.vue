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
      text: "每年各站所应急维修项目情况",
      subtext: "每年"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
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

