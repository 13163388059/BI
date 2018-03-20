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
      text: "各站所维修费用类型占比",
      subtext: "当年",
      x: "center"
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: "vertical",
      left: "left",
      top: "middle",
      data: ["十堰西", "上津", "十漫", "青曲", "武当山", "谷城", "龙王"]
    },
    series: [
      {
        name: "修费类数量",
        type: "pie",
        radius: "55%",
        center: ["50%", "60%"],
        data: [
          { value: 35, name: "十堰西" },
          { value: 49, name: "上津" },
          { value: 38, name: "十漫" },
          { value: 20, name: "青曲" },
          { value: 48, name: "武当山" },
          { value: 18, name: "谷城" },
          { value: 32, name: "龙王" }
        ]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

