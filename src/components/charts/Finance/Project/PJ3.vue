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
      text: "年度部门数量",
      subtext: "每月",
      x: "center"
    },
    tooltip: {
      trigger: "axis"
    },
    grid: {
      x: 70,
      x2: 70
    },
    legend: {
      left: "left",
      width: "250px",
      data: ["2014", "2015", "2016", "2017", "2018"]
    },
    xAxis: [
      {
        type: "category",
        data: ["2014", "2015", "2016", "2017", "2018"]
      }
    ],
    xAxis: [
      {
        type: "category",
        data: [
          "处领导",
          "办公室",
          "人事劳动科",
          "计划财务科",
          "资产管理科",
          "工程养护科",
          "政工科"
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
        name: "2015",
        type: "bar",
        data: [400, 419, 700, 532, 256, 76, 630]
      },
      {
        name: "2016",
        type: "bar",
        data: [260, 519, 200, 514, 228, 550, 275]
      },
      {
        name: "2017",
        type: "bar",
        data: [210, 740, 250, 374, 168, 285, 335]
      },
      {
        name: "2018",
        type: "bar",
        data: [516, 279, 205, 414, 480, 90, 185]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

