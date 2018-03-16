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
      text: "某地区蒸发量和降水量",
      subtext: "纯属虚构"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: ["军警车", "紧急车", "绿通车", "UL", "其他"]
    },
    xAxis: [
      {
        type: "category",
        data: [
          "黄梅南管理所",
          "小池管理所",
          "龙感湖管理所",
          "界子墩管理所",
          "黄梅管理所",
          "花桥管理所",
          "武穴管理所",
          "蕲春管理所",
          "散花管理所"
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
        name: "军警车",
        type: "bar",
        data: [18, 12, 15, 23, 25, 16, 13, 16, 9]
      },
      {
        name: "紧急车",
        type: "bar",
        data: [1, 0, 0, 2, 0, 0, 0, 0, 0]
      },
      {
        name: "绿通车",
        type: "bar",
        data: [160, 99, 119, 164, 187, 107, 156, 182, 48]
      },
      {
        name: "UL",
        type: "bar",
        data: [1, 0, 1, 1, 1, 0, 1, 0, 0]
      },
      {
        name: "其他",
        type: "bar",
        data: [70, 99, 123, 144, 167, 127, 136, 112, 148]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

