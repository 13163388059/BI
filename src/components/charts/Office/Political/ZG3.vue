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
      text: "党委培养人数排名前5",
      subtext: "当年",
      x: "center"
    },
    tooltip: {
      trigger: "axis"
    },
    xAxis: [
      {
        type: "category",
        data: ["张卉", "李兴东", "吴超","肖建国","郭拓"]
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "培养人数",
        type: "bar",
        data: [12, 19, 15,12,11],
        markPoint: {
          data: [
            { type: "max", name: "最大值" },
            { type: "min", name: "最小值" }
          ]
        },
        markLine: {
          data: [{ type: "average", name: "平均值" }]
        }
      }
    ]
  };

  myChart.setOption(option);
}
</script>

