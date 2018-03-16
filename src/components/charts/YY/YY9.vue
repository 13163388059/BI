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
      text: "黄梅南管理所ETC年收入"
    },
    xAxis: {
      type: "category",
      data: ["2016", "2017", "2018"]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: [112987, 103043, 147323],
        type: "line"
      }
    ]
  };

  myChart.setOption(option);
}
</script>

