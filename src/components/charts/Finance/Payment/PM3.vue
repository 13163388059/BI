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
      text: "年度部门支付计划",
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
      left:'left',
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
        data: [400, 410, 210, 132, 250, 70, 130]
      },
      {
        name: "2016",
        type: "bar",
        data: [266, 198, 200, 104, 252, 450, 271]
      },
      {
        name: "2017",
        type: "bar",
        data: [216, 710, 250, 341, 168, 254, 352]
      },
      {
        name: "2018",
        type: "bar",
        data: [526, 279, 205, 414, 480, 150, 185]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

