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
      text: "各管理所客车与货车流量",
      subtext: "当前"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: ["客车流量", "货车流量"]
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
        name: "客车流量",
        type: "bar",
        data: [
          412987,
          303043,
          547323,
          221517,
          101812,
          201187,
          127657,
          342182,
          411921
        ]
      },
      {
        name: "货车流量",
        type: "bar",
        data: [
          312987,
          213153,
          317553,
          192113,
          93414,
          93514,
          90135,
          272263,
          294571
        ]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

