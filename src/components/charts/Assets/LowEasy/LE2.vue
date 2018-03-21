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
      text: "2018年各部门消耗情况",
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
      data: [
        "资产管理科",
        "收费稽查科",
        "后勤中心",
        "路政管理科",
        "工程养护科",
        "路政大队",
        "管理所",
        "超限运输站",
        "安全应急办",
        "计划财务科",
        "政工科",
        "人事劳动科"
      ]
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: "55%",
        center: ["50%", "60%"],
        data: [
          { value: 98654, name: "收费稽查科" },
          { value: 86574, name: "后勤中心" },
          { value: 123650, name: "路政管理科" },
          { value: 115980, name: "工程养护科" },
          { value: 136874, name: "路政管理科" },
          { value: 106987, name: "路政大队" },
          { value: 112340, name: "管理所" },
          { value: 96587, name: "超限运输站" },
          { value: 86574, name: "安全应急办" },
          { value: 84231, name: "计划财务科" },
          { value: 83254, name: "政工科" },
          { value: 82456, name: "人事劳动科" }
        ]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

