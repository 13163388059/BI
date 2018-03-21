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
      text: "各部门每月的预算",
       subtext: "每月",
      x: "center"
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
      x: 70,
      x2: 70
    },
    legend: {
      left:"left",
      width:'350px',
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
        name: "处领导",
        type: "bar",
        data: [320, 332, 301, 334, 390, 330, 320, 450, 432, 462, 225, 156]
      },
      {
        name: "办公室",
        type: "bar",

        data: [120, 132, 101, 134, 90, 230, 210, 520, 510, 450, 440, 356]
      },
      {
        name: "人事劳动科",
        type: "bar",

        data: [220, 182, 191, 234, 290, 330, 310, 365, 590, 480, 440, 112]
      },
      {
        name: "计划财务科",
        type: "bar",

        data: [150, 232, 201, 154, 190, 330, 410, 750, 850, 660, 441, 114]
      },
      {
        name: "资产管理科",
        type: "bar",
        data: [
          862,
          1018,
          964,
          1026,
          1679,
          1600,
          1570,
          1400,
          1150,
          1360,
          1450,
          798
        ]
      },
      {
        name: "工程养护科",
        type: "bar",
        barWidth: 5,

        data: [620, 732, 701, 734, 1090, 1130, 1120, 450, 110, 555, 780, 789]
      },
      {
        name: "政工科",
        type: "bar",

        data: [120, 132, 101, 134, 290, 230, 220, 782, 158, 740, 560, 980]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

