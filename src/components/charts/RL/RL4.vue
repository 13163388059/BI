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
      text: "人员类型分布",
      subtext: "当前",
      x: "center"
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: "vertical",
      left: "left",
      data: [
        "实习生",
        "正式工",
        "离职人员",
        "劳务工",
        "借调人员",
        "调动人员",
        "退养退休人员"
      ]
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        data: [
          { value: 35, name: "实习生" },
          { value: 49, name: "正式工" },
          { value: 58, name: "离职人员" },
          { value: 510, name: "劳务工" },
          { value: 78, name: "借调人员" },
          { value: 18, name: "调动人员" },
          { value: 32, name: "退养退休人员" }
        ]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

