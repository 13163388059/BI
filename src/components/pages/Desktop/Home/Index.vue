<template lang="html">
  <div style="height:100%;width:100%" >

    <bi-container tab h='17%' w ='20%' v-for='(item,index) in countData'>
      
        <div class="item">
          <div class="block color color1">
            <div class = 'container' style="width:33%;height:100%;padding:16px 0">
              <div class='count--outer'>
                <div class='count--value'>{{item.all}}</div>
              </div>
              <div class='count--outer'>
                <div class='count--title'>总数</div>
              </div>
            </div>
            <div class = 'container' style="width:33%;height:100%;padding:16px 0">
              <div class='count--outer'>
                <div class='count--value'>{{item.now}}</div>
              </div>
              <div class='count--outer'>
                <div class='count--title'>正在<br>办理</div>
              </div>
            </div>
            <div class = 'container' style="width:33%;height:100%;padding:16px 0">
              <div class='count--outer'>
                <div class='count--value'>{{item.all}}</div>
              </div>
              <div class='count--outer'>
                <div class='count--title'>已完成</div>
              </div>
            </div>
          
          </div>
        </div>
    </bi-container>


    <bi-container tab h='32%' w ='40%' >
      <bi-chart />
    </bi-container>


    <bi-container tab h='32%' w ='30%' >
      <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
          </el-tabs>
    </bi-container>

    

        <bi-container tab h='32%' w ='30%' :innerStyle='{padding:"40px 8px 8px 8px",position:"relative"}'>
      
          <div style='position:absolute;top:0;height:40px;line-height:40px;font-weight:bold;padding-left:8px;left:0;width:100%;border-bottom:solid 2px rgba(255,255,255,0.7)'>突发事件列表</div>
           <el-table
            :data="tableData"
            style="width: 100%"
            height='100%'
              >
            <el-table-column
              prop="date"
              label="日期"
              width = '100'>
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width = '100'>
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
    </bi-container>



    <bi-container map h='50%' w ='75%' float='right'>
      
    </bi-container>

    <bi-container video h='30%' w ='25%'>
      
    </bi-container>
    
    <bi-container list h='20%' w ='25%'>
      
    </bi-container>

    
  </div>
</template>

<script>
import chart from '../../../charts/Finance/Project/PJ3'


export default {
  components: {
    ['bi-chart']: chart
  },
  data() {
    return {
      activeName: 'second',
      countData: [
        { all: 45, now: 12, done: 34 },
        { all: 45, now: 12, done: 34 },
        { all: 45, now: 12, done: 34 },
        { all: 45, now: 12, done: 34 },
        { all: 45, now: 12, done: 34 },
      ],

      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    };
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
    font-size: 14px;
    font-weight: 700;
}
.count--value {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    font-size: 28px;
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

.color::after {
    content: '';
    position: absolute;
    display: block;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
}

.color1::after {
    background: linear-gradient(to right, #898579, #898579);
}
.color2::after {
    background: linear-gradient(to right, #4e3956, #392b3c);
}
.color3::after {
    background: linear-gradient(to right, #684c58, #684c58);
}
.color4::after {
    background: linear-gradient(to right, #898579, #898579);
}
</style>
