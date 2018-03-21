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
    title:{
      text:'每月资产变动情况'
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: ["入库", "调拨", "维修", "出租", "拟报废", "报废"]
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
        data: [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月"
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
        name: "入库",
        type: "bar",
        data: [320, 332, 350, 380, 400, 430, 450, 470, 500, 510, 530, 550]
      },
      {
        name: "调拨",
        type: "bar",
        data: [150, 155, 160, 180, 188, 202, 235, 240, 261, 282, 300, 301]
      },
      {
        name: "维修",
        type: "bar",
        data: [100, 102, 110, 126, 150, 169, 180, 205, 220, 241, 252, 255]
      },
      {
        name: "出租",
        type: "bar",
        data: [200, 211, 221, 230, 262, 287, 290, 325, 342, 350, 368, 394]
      },

      {
        name: "拟报废",
        type: "bar",
        barWidth: 5,
        data: [50, 65, 88, 100, 125, 168, 192, 210, 230, 243, 256, 272]
      },
      {
        name: "报废",
        type: "bar",
        data: [45, 60, 78, 88, 110, 150, 188, 205, 215, 235, 243, 256]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

