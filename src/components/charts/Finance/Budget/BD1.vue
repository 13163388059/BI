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
      text: "各部门总的预算",
      subtext: "每年",
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
      left:"left",
      width:'250px',
      data: ["2015", "2016", "2017", "2018"]
    },
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
        data: [4000, 4109, 7010, 5132, 2506, 706, 6130]
      },
      {
        name: "2016",
        type: "bar",
        data: [2660, 5198, 2000, 5104, 2528, 5450, 2715]
      },
      {
        name: "2017",
        type: "bar",
        data: [2160, 7410, 2504, 3741, 1680, 2854, 3352]
      },
      {
        name: "2018",
        type: "bar",
        data: [5126, 2759, 2055, 4154, 4850, 950, 1855]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

