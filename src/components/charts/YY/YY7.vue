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
      text: "各管理所免费金额占比情况",
      subtext: "当前"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: ["免费金额"]
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
        name: "免费金额",
        type: "bar",
        data: [
          112987,
          103043,
          147323,
          121517,
          91812,
          101187,
          107657,
          142182,
          121921
        ]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

