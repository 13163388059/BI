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
      text: "各路段维护率最高排名三个设施",
      subtext: "每年"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: ["金额"]
    },
    xAxis: [
      {
        type: "category",
        data: ["王龙湾大桥", "丘家湾大桥", "花屋大桥"]
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "维修次数",
        type: "bar",
        data: [132, 119, 193]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

