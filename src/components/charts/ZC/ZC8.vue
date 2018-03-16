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
    title:{
      text:'每年报废数量最多的三的站所'
    },
    xAxis: {
      type: "category",
      data: ["资产管理科", "工程养护科", "服务区管理办公室"]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: [845, 624, 532],
        type: "bar"
      }
    ]
  };

  myChart.setOption(option);
}
</script>

