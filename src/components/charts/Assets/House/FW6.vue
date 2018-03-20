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
      text: "维修费排名前三的项目",
      subtext: "当年",
      x: "center"
    },
    tooltip: {
      trigger: "axis"
    },
    xAxis: [
      {
        type: "category",
        data: [
          "十堰西附属楼\n扩建以及翻新",
          "襄阳东\n宿舍改造",
          "六里坪\n行车道扩建"
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
        name: "维修金额(单位万元)",
        type: "bar",
        data: [132, 119, 103]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

