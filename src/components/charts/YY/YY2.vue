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
      text: "客货车收入",
      subtext: "当前"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: ["客车收入(单位万元)", "货车收入(单位万元)"]
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
        name: "客车收入(单位万元)",
        type: "bar",
        data: [180, 129, 150, 232, 256, 167, 135, 162, 96]
      },
      {
        name: "货车收入(单位万元)",
        type: "bar",
        data: [160, 99, 119, 164, 187, 107, 156, 182, 48]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

