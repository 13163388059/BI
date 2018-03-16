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
      text: "每年入职与离职人员",
      subtext: "每年"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: ["入职", "离职"]
    },
    xAxis: [
      {
        type: "category",
        data: ["2016", "2017", "2018"]
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "入职",
        type: "bar",
        data: [201, 289, 198]
      },
      {
        name: "离职",
        type: "bar",
        data: [5, 3, 9]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

