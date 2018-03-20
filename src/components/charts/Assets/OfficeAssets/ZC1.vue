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
      text: "每年资产变动情况"
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985"
        }
      }
    },
    legend: {
      data: ["入库", "调拨", "维修", "出租", "拟报废", "报废"]
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["2014", "2015", "2016", "2017", "2018"]
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "入库",
        type: "line",
        stack: "总量",
        areaStyle: { normal: {} },
        data: [2000, 2500, 3300, 4500, 5300, 5900, 6500]
      },
      {
        name: "调拨",
        type: "line",
        stack: "总量",
        areaStyle: { normal: {} },
        data: [150, 232, 220, 240, 250, 330, 410]
      },
      {
        name: "维修",
        type: "line",
        stack: "总量",
        areaStyle: { normal: {} },
        data: [320, 332, 350, 360, 390, 410, 450]
      },
      {
        name: "出租",
        type: "line",
        stack: "总量",
        label: {
          normal: {
            show: true,
            position: "top"
          }
        },
        areaStyle: { normal: {} },
        data: [820, 932, 950, 970, 1290, 1330, 1360]
      },
      {
        name: "拟报废",
        type: "line",
        stack: "总量",
        areaStyle: { normal: {} },
        data: [220, 250, 270, 280, 290, 330, 310]
      },
      ,
      {
        name: "报废",
        type: "line",
        stack: "总量",
        label: {
          normal: {
            show: true,
            position: "top"
          }
        },
        areaStyle: { normal: {} },
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

