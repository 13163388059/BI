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
    title:{
      text:'每年入库数量最多的三的站所'
    },
    xAxis: {
      type: "category",
      data: ["资产管理科", "随州管理所", "收费稽查科"]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: [6000, 5260, 4500],
        type: "bar"
      }
    ]
  };

  myChart.setOption(option);
}
</script>

