<template>
    <div class="gis_toolbar">
        <div class="gis_toolbar--unit" v-for="(v,i) in units">
            <div class="gis_toolbar--text">{{v.name}}</div>
            <div class="gis_toolbar--panel">
              <div class="gis_toolbar--item" v-for="(item,index) in v.children">{{item.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'gis_toolbar',
  data() {
    return {
      units: [
        {
          name: '房屋',
          children: [
            { name: '收费站/管理所' },
            { name: '服务区' }
          ]
        },

        {
          name: '路产',
          children: [
            { name: '桥梁' },
            { name: '隧道' },
            { name: '互通' },
            { name: '匝道' },
            { name: '涵洞' },
            { name: '标牌' },
            { name: '标志' }
          ]
        },

        {
          name: '机电',
          children: [
            { name: '监控摄像头' },
            { name: '情报板' },
            { name: '交通信号灯' },
            { name: '气象监测器' }
          ]
        },

        {
          name: '车辆',
          children: [
            { name: '路政车辆' },
            { name: '养护车辆' },
            { name: '救援车辆' }
          ]
        },
      ]
    }
  }
}
</script>


<style lang="scss" scoped>
.gis_toolbar {
    position: absolute;
    left: 16px;
    top: 16px;
    height: 36px;
    color: #666;
    background-color: #fff;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.8);
    z-index: 1;
}

.gis_toolbar--unit {
    float: left;
    width: 50px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    margin: 6px 0 6px;
    border-left: solid 1px #666;
    transition: all 0.3s ease-out;

    * {
        transition: all 0.3s ease-out;
    }

    &:first-child {
        border-left: solid 0px #666;
    }

    .gis_toolbar--panel {
        background-color: aqua;
        position: absolute;
        left: 0;
        right: 0;
        top: 41px;
        height: 0;
        overflow: hidden;
        
         box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.8);
        .gis_toolbar--item{
          height: 30px;
          line-height: 30px;

          &:first-child{
            margin-top:-15px;
          }
          &:last-child{
            margin-bottom:-15px;
          }
        }
    }

    &:hover .gis_toolbar--panel {
        height: auto;
        padding: 27px 0;
        z-index: 2;
    }

    &::after{
      content: '';
      display: block;
      height: 11px;
    }
}
</style>
