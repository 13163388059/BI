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
      text: "各部门在职人数",
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
      top: "middle",
      data: [
        "计划财务科",
        "收费稽查科",
        "工程养护科",
        "信息监控中心",
        "资产管理科",
        "人事劳动科"
      ]
    },
    series: [
      {
        name: "人数",
        type: "pie",
        radius : '55%',
        center: ['50%', '60%'],
        data: [
          { value: 35, name: "计划财务科" },
          { value: 49, name: "收费稽查科" },
          { value: 108, name: "工程养护科" },
          { value: 51, name: "信息监控中心" },
          { value: 78, name: "资产管理科" },
          { value: 32, name: "人事劳动科" }
        ]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

