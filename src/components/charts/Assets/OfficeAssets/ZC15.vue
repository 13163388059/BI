<template lang="html">
  <div style="height:100%;width:100%" ref  = 'chart' >
  </div>
</template>

<script>
import installTheme from "../../theme";

installTheme({}, echarts);

const polling = []

export default {
  name: "page-test",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    const myChart = echarts.init(this.$refs.chart, "darkk"),
      _this = this;

    ;

    polling.push(glob.polling
      .sub('GetAssetTypeCount', 'assets')
      .on('GetAssetTypeCount', 'assets', ({ data }) => {
        if(typeof data == 'string') data = JSON.parse(data)

        init(myChart,data)
      }))



    _this.$store.commit("charts/push", myChart);
  },
  beforeDestroy(){
    polling.forEach(i=>{
      glob.polling.cancel(i)
    })
  }
};

function init(myChart,op) {
  const option = {
    title: {
      text: "资产类别数量统计",
     // subtext: '模拟数据,无需参考',
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    legend: {
      left:"right",
      data: op.AssStatus || ["在用", "损坏", "闲置", "出租", "拟报废", "报废"] 
    },
    grid: {
      x: 40,
      y:60,
      x2: 40,
      y2:40
    },
    xAxis: [
      {
        type: "category",
        axisLabel: {
          interval: 0,
          rotate: 20,
          margin: 12
        },
        data:op.AssType|| [
          "土地",
          "房屋",
          "构筑物",
          "通用设备",
          "车辆",
          "专用设备",
          "陈列品",
          "日常用具类",
          "图书档案",
          "特种动植物",
          "无形资产"
        ]
      }
    ],
    yAxis: [
      {
        type: "value",
        min: 0,
        interval: 1000
      },
      {
        type: "value",
        min: 0,
        interval: 500
      }
    ],
    series: op.StatusCount.map(i=>({
      name:i.Name,
      type : i.type || 'bar',
      data: i.Count
    }))
  };

  myChart.setOption(option);
}
</script>

