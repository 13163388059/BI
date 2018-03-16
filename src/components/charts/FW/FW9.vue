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
      text: "每年各站所合同金额结余排名前三",
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
        data: ["附属楼外墙粉刷", "食堂桌椅换新", "站所路面翻新"]
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "结余金额(单位万元)",
        type: "bar",
        data: [32, 19, 13]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

