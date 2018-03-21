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
      text: "各管理所清分前出入口流量",
      subtext: "当前"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: ["入口车流量", "出口车流量"]
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
        name: "入口车流量",
        type: "bar",
        data: [
          1812987,
          1703043,
          1547323,
          1921517,
          1801812,
          1201187,
          1127657,
          1342182,
          1611921
        ]
      },
      {
        name: "出口车流量",
        type: "bar",
        data: [
          1212987,
          1313153,
          997553,
          1362113,
          1213414,
          943514,
          900135,
          892263,
          1124571
        ]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

