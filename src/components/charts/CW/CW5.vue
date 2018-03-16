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
      text: "部门年度预算(万元)"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: ["2016", "2017", "2018"]
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "处领导",
        "办公室",
        "人事劳动科",
        "计划财务科",
        "资产管理科",
        "工程养护科",
        "政工科"
      ]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        name: "2016",
        type: "line",
        stack: "总量",
        data: [30, 800, 301, 154, 90, 230, 109]
      },
      {
        name: "2017",
        type: "line",
        stack: "总量",
        data: [50, 1000, 495, 367, 190, 330, 177]
      },
      {
        name: "2018",
        type: "line",
        stack: "总量",
        data: [100, 1600, 762, 485, 290, 630, 321]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

