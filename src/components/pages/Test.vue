<template lang="html">
  <div style="height:100%;width:100%" >
    <div class="container" style="height:50%;width:100%">
      <div class="item">
        <div ref = 'chart'></div>
      </div>
    </div>
    <div class="container" style="height:50%;width:25%">
      <div class="item">
        <div class="block color color1"></div>
      </div></div>
    <div class="container" style="height:50%;width:25%">
      <div class="item">
        <div class="block color color2"></div>
      </div>
    </div>
    <div class="container" style="height:50%;width:25%">
      <div class="item">
        <div class="block color color3"></div>
      </div>
    </div>
    <div class="container" style="height:50%;width:25%">
      <div class="item">
        <div class="block color color1"></div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import installTheme from './theme'

installTheme({}, echarts)

export default {
  name: 'page-test',
  data() {
    return {
      json:{}
    }
  },
  methods: {

  },
  mounted() {
    const
      myChart = echarts.init(this.$refs.chart, 'darkk'),
      _this = this

    init(myChart)

    _this.$store.commit('charts/reset', [myChart])


  }
}


function init(myChart) {
  myChart.setOption({
    title: {
      text: '基础雷达图'
    },
    tooltip: {},
    legend: {
      data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
    },
    radar: {
      // shape: 'circle',
      name: {
        textStyle: {
          color: '#fff',
          backgroundColor: '#999',
          borderRadius: 3,
          padding: [3, 5]
        }
      },
      indicator: [{
          name: '销售（sales）',
          max: 6500
        },
        {
          name: '管理（Administration）',
          max: 16000
        },
        {
          name: '信息技术（Information Techology）',
          max: 30000
        },
        {
          name: '客服（Customer Support）',
          max: 38000
        },
        {
          name: '研发（Development）',
          max: 52000
        },
        {
          name: '市场（Marketing）',
          max: 25000
        }
      ]
    },
    series: [{
      name: '预算 vs 开销（Budget vs spending）',
      type: 'radar',
      // areaStyle: {normal: {}},
      data: [{
          value: [4300, 10000, 28000, 35000, 50000, 19000],
          name: '预算分配（Allocated Budget）'
        },
        {
          value: [5000, 14000, 28000, 31000, 42000, 21000],
          name: '实际开销（Actual Spending）'
        }
      ]
    }]
  })
}
</script>

<style lang="css" scoped>

.container{
  float: left;
  position: relative;
}

.padding{
  padding: 8px;
}

.item{
  width: 100%;
  height:100%;
  padding: 8px;
}

.item > div{
  width: 100%;
  height:100%;
}

.block{
  /* background-color: #20252b; */
  background: linear-gradient(to right, #242e3a, #242e3a);
  /* box-shadow: 0 3px 8px -1 rgba(0, 0, 0, 0.4); */
  border-radius: 0px;
  position: relative;
}

.color::after{
  content: '';
  position: absolute;
  display: block;
  bottom: 0;left: 0;right: 0;
  height: 4px
}

.color1::after{
  background: linear-gradient(to right, #898579, #898579);
}
.color2::after{
  background: linear-gradient(to right, #4e3956, #392b3c);
}
.color3::after{
  background: linear-gradient(to right, #684c58, #684c58);
}
.color4::after{
  background: linear-gradient(to right, #898579, #898579);
}
</style>
