<template lang="html">
  <div style="height:100%;width:100%;min-height:800px;min-width:1000px;overflow:auto;" >

    <bi-container tab h='15%' w ='20%'  :color = '1'> 
      <div class = 'container' style="width:50%;height:100%;padding:16px 0">
              <div class='count--outer title'>
                <div class='count--title'>年度预算</div>
              </div>
              <div class='count--outer value'>
                <div class='count--value'>政  采：{{topData.NDYS.ZC}} 万元
                  <br>非政采：{{topData.NDYS.FZC}}万元</div>
              </div>
            </div>
            <div class = 'container' style="width:50%;height:100%;padding:16px 0">
              <div class='count--outer title'>
                <div class='count--title'>预算执行</div>
              </div>
              <div class='count--outer value'>
                <div class='count--value'>执行率: {{topData.YSZX.ZXL}}%<br>同比上月增长: {{topData.YSZX.ZZ}}%</div>
              </div>
            </div>
    </bi-container>

        <bi-container tab h='15%' w ='20%' :color = '1'>
       <div class = 'container' style="width:50%;height:100%;padding:16px 0">
              <div class='count--outer title'>
                <div class='count--title'>可用固定资产</div>
              </div>
              <div class='count--outer value'>
                <div class='count--value'>总数: {{topData.GDZZ.ZS}}件<br>报废资产: {{topData.GDZZ.BF}}件</div>
              </div>
            </div>
            <div class = 'container' style="width:50%;height:100%;padding:16px 0">
              <div class='count--outer title'>
                <div class='count--title'>资产残余</div>
              </div>
              <div class='count--outer value'>
                <div class='count--value'>残余价值: {{topData.ZCCY.JZ}}万元<br>残余比例: {{topData.ZCCY.BL}}%</div>
              </div>
            </div>
          
          
    </bi-container>

        <bi-container tab h='15%' w ='20%' :color = '1'>
      
            <div class = 'container' style="width:50%;height:100%;padding:16px 0">
              <div class='count--outer title'>
                <div class='count--title'>年度路政违法事件</div>
              </div>
              <div class='count--outer value'>
                <div class='count--value'>共{{topData.WFSJ.G}}起<br>未处理{{topData.WFSJ.WCL}}起</div>
              </div>
            </div>
            <div class = 'container' style="width:50%;height:100%;padding:16px 0">
              <div class='count--outer title'>
                <div class='count--title'>年度养护计划</div>
              </div>
              <div class='count--outer value'>
                <div class='count--value'>共 {{topData.NDYH.G}} 项<br>未执行 {{topData.NDYH.WZX}} 项</div>
              </div>
            </div>
          
    </bi-container>

        <bi-container tab h='15%' w ='20%' :color = '1'>
      
            <div class = 'container' style="width:50%;height:100%;padding:16px 0">
              <div class='count--outer title'>
                <div class='count--title' >日收费额</div>
              </div>
              <div class='count--outer value'>
                <div class='count--value'>ETC: {{topData.RSFE.ETC}} 元<br>
MTC: {{topData.RSFE.MTC}} 元</div>
              </div>
            </div>
            <div class = 'container' style="width:50%;height:100%;padding:16px 0">
              <div class='count--outer title'>
                <div class='count--title'>日流量</div>
              </div>
              <div class='count--outer value'>
                <div class='count--value'>入口: {{topData.RLL.RK}}辆<br>出口: {{topData.RLL.CK}} 辆</div>
              </div>
            </div>
          
    </bi-container>

        <bi-container tab h='15%' w ='20%' :color = '1'>
            <div class = 'container' style="width:50%;height:100%;padding:16px 0">
              <div class='count--outer title'>
                <div class='count--title'>年度安全隐患</div>
              </div>
              <div class='count--outer value'>
                <div class='count--value'>累计 {{topData.AQYH.LJ}} 项<br>已处理 {{topData.AQYH.YCL}} 项</div>
              </div>
            </div>
            <div class = 'container' style="width:50%;height:100%;padding:16px 0">
              <div class='count--outer title'>
                <div class='count--title'>年度突发事件</div>
              </div>
              <div class='count--outer value'>
                <div class='count--value'>累计 {{topData.TFSJ.LJ}} 起<br>已处置 {{topData.TFSJ.YCZ}} 起</div>
              </div>
            </div>
    </bi-container>


    <bi-container tab h='32%' w ='40%' :innerStyle='{padding:"8px"}'>
      <bi-chart />
    </bi-container>


    <bi-container tab h='32%' w ='30%' :innerStyle='{padding:"40px 8px 8px 8px",position:"relative"}'>
      <el-tabs  v-model="activeName" @tab-click="handleClick" style="position:absolute;top:0;left:8px;right:8px;">
        <el-tab-pane v-for='(tab,index) in tabData':key='index' :label="tab.name" :name="tab.id"></el-tab-pane>
      </el-tabs>
      <el-table :data="renderTab" style="width: 100%" height='100%'>
        <el-table-column prop="name" label="管理所" ></el-table-column>
        <el-table-column prop="rk" label="入口车流量"></el-table-column>
        <el-table-column prop="ck" label="出口车流量" width = '100'> </el-table-column>
        <el-table-column prop="state" label="收费额" width = '100'> </el-table-column>
      </el-table>
    </bi-container>

    

    <bi-container tab h='32%' w ='30%' :innerStyle='{padding:"40px 8px 8px 8px",position:"relative"}'>
      <div style='position:absolute;top:0;height:40px;line-height:40px;font-weight:bold;padding-left:8px;left:0;width:100%;border-bottom:solid 2px rgba(255,255,255,0.7)'>突发事件列表
      </div>
      <el-table :data="tableData" style="width: 100%" height='100%'>
        <el-table-column prop="name" label="事件名称" ></el-table-column>
        <el-table-column prop="date" label="发生时间"></el-table-column>
        <el-table-column prop="zh" label="桩号" width = '100'> </el-table-column>
        <el-table-column prop="state" label="处置状态" width = '100'> </el-table-column>
      </el-table>
    </bi-container>



    <bi-container map h='52%' w ='75%' float='right'>
      
      <bi-map />
    </bi-container>

    <bi-container video h='30%' w ='25%'>
      <div style='width:50%;height:50%;float:left;padding:8px' >
        <img src='../../../../assets/video0.jpg' style='width:100%;height:100%' />
      </div>
      
      <div style='width:50%;height:50%;float:left;padding:8px' >
        <img src='../../../../assets/video1.jpg' style='width:100%;height:100%' />
      </div>
      
      <div style='width:50%;height:50%;float:left;padding:8px' >
        <img src='../../../../assets/video2.jpg' style='width:100%;height:100%' />
      </div>
      
      <div style='width:50%;height:50%;float:left;padding:8px' >
        <img src='../../../../assets/video3.jpg' style='width:100%;height:100%' />
      </div>
    </bi-container>
    
    <bi-container list h='22%' w ='25%' :innerStyle='{padding:"8px"}'>
      <bi-msg />
    </bi-container>

    
  </div>
</template>

<script>
import chart from '../../../charts/Assets/OfficeAssets/ZC15'
import Msg from './Msg.vue'
import tabData from './tabData'
import BMap from './Map.vue'



export default {
  components: {
    ['bi-chart']: chart,
    ['bi-msg']: Msg,
    ['bi-map']: BMap
  },
  data() {
    return {
      topData: {
        NDYS: { ZC: 0, FZC: 0 }, //年度预算
        YSZX: { ZXL: 0, ZZ: 0 }, //预算执行
        GDZZ: { ZS: 0, BF: 0 }, //可用固定资产
        ZCCY: { JZ: 0, BL: 0 }, //资产残余
        WFSJ: { G: 0, WCL: 0 }, //年度路政违法事件
        NDYH: { G: 0, WZX: 0 }, //年度养护计划
        RSFE: { ETC: 0, MTC: 0 }, //日收费额
        RLL: { RK: 0, CK: 0 },  //日流量
        AQYH: { LJ: 0, YCL: 0 }, //年度安全隐患
        TFSJ: { LJ: 0, YCZ: 0 } //年度突发事件
      },
      countData: [
        { all: 45, now: 12, done: 34 },
        { all: 45, now: 12, done: 34 },
        { all: 45, now: 12, done: 34 },
        { all: 45, now: 12, done: 34 },
        { all: 45, now: 12, done: 34 },
      ],
      activeName: '黄黄路段',
      tabData: tabData,
      tableData: [
        {
          name: '大枫树岭隧道交道事故',//事件名称
          date: '2018-3-21 9:55',//发生时间
          zh: 'K678+900',//桩号
          state: '接警上报'//处置状态
        }, {
          name: '隧道交通事故',
          date: '2018-3-20 9:54',
          zh: 'K58+543',
          state: '先期处置'
        }, {
          name: '危化品运输事故',
          date: '2018-3-20 9:44',
          zh: 'K58+543',
          state: '事件定级'
        }, {
          name: '隧道停电',
          date: '2018-3-18 9:40',
          zh: 'K27+463',
          state: '处置确认'
        }, {
          name: '交通事故',
          date: '2018-3-10 8:20',
          zh: 'K693+55',
          state: '实施预案'
        }, {
          name: '养护施工',
          date: '2018-3-9 10:50',
          zh: 'K70+82',
          state: '处置确认'
        }, {
          name: '主线恶意堵道',
          date: '2018-3-9 10:42',
          zh: 'K78+12',
          state: '接警上报'
        }],

    };
  },
  mounted() {
    const _this = this

    glob.polling
      .sub('GetNDLZWFSJ', 'roadproperty')
      .on('GetNDLZWFSJ', 'roadproperty', ({ data }) => { _this.topData.WFSJ = { G: data.SJSum, WCL: data.WCL } })

    glob.polling
      .sub('GetNDYHJH', 'roadproperty')
      .on('GetNDYHJH', 'roadproperty', ({ data }) => {
        console.log(data)
        _this.topData.NDYH = { G: data.ZBSum, WZX: data.ZBWZX }      })

    glob.polling
      .sub('GeRSFE', 'operation')
      .on('GeRSFE', 'operation', ({ data }) => { _this.topData.RSFE = { ETC: data.ETC, MTC: data.MTC } })

    glob.polling
      .sub('GeRLL', 'operation')
      .on('GeRLL', 'operation', ({ data }) => { _this.topData.RLL = { RK: data.RK, CK: data.CK } })


    glob.polling
      .sub('GeLLLB', 'operation')
      .on('GeLLLB', 'operation', ({ data }) => {
        const _data = data.map(i => ({
          id: i.group,
          name: i.group,
          items: i.data.map(v => ({
            name: v.DENAME,
            rk: v.RK,
            ck: v.CK,
            state: v.QFQZSR
          }))
        }))

        console.log(data)
        console.log(_data)
        _this.tabData =  _data    })
  },
  computed: {
    renderTab() {
      const _this = this,
        tab_data = _this.tabData.map((v) => (v.id == _this.activeName ? v.items : null))
          .filter(v => v)[0]

      if(tab_data) return tab_data
      else _this.tabData[0]
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style lang="scss">
.el-tabs__item {
  color: rgba(255, 255, 255, 0.7);
}

.el-tabs__item.is-active {
  color: #fff;
  font-weight: 700;
}

.el-tabs__nav-wrap.is-top::after {
  background-color: rgba(255, 255, 255, 0.3);
}

.el-tabs__active-bar.is-top {
  background-color: rgba(255, 255, 255, 1);
}
.el-tabs__item.is-top.is-active {
  outline: none !important;
  border: none !important;
  box-shadow: none !important;
}

.el-table,
.el-table * {
  background: transparent !important;
  color: rgba(255, 255, 255, 0.7);
}
</style>



<style lang="css" scoped>
.count--title {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  font-size: 16px;
  opacity: 0.9;
  font-weight: 700;
}
.count--value {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  font-size: 14px;
  line-height: 22px;
  color: #fff;
  font-weight: 700;
}

.container .container .count--title,
.container .container .count--value {
  border-left: solid 1px rgba(255, 255, 255, 0.5);
}

.container .container:first-child .count--title,
.container .container:first-child .count--value {
  border-left: solid 0 #fff;
}

.count--outer {
  display: table;
  width: 100%;
  height: 50%;
}

.count--outer.title {
  display: table;
  width: 100%;
  height: 30%;
}
.count--outer.value {
  display: table;
  width: 100%;
  height: 70%;
}

.container.tab {
  width: 30%;
  height: 32%;
}
.container.tab .item > div {
  padding: 0 8px;
}

.container.grid {
  width: 30%;
  height: 32%;
}

.container {
  float: left;
  position: relative;
}

.padding {
  padding: 8px;
}

.item {
  width: 100%;
  height: 100%;
  padding: 8px;
}

.item > div {
  width: 100%;
  height: 100%;
}

.block {
  background-color: rgba(45, 55, 70, 0.6);
  /* background: linear-gradient(to right, #242e3a, #242e3a); */
  /* box-shadow: 0 3px 8px -1 rgba(0, 0, 0, 0.4); */
  border-radius: 0px;
  position: relative;
}
</style>
