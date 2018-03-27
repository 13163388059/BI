<template>
    <!-- <div class='main'> -->
        <transition-group name="flip-list" tag="div" class='main'>
        <div v-for="(item,index) in msg" class="item" :key='item.id' :class="item.type" >
            <i :class="'iconfont icon-'+item.type"></i> {{item.text}} 
        </div>
  </transition-group>
    <!-- </div> -->
</template>

<script>
export default {
    name:'bi-msgscroll',
    data(){
        return {
            msg:[
            {text:'武青高速 K132+100 发生三车追尾事故，请立即处理！',type:'alert',id:"1"},
            {text:'武青高速全路段2018年04月有 8 项养护施工尚在进行，请注意发布出行服务信息！',type:'warn',id:"5"},
            {text:'青山养护站应急物资#1仓库融雪剂余量为0.5吨，请及时调拨物资！',type:'warn',id:"4"},
            {text:'武青高速 K216+300 青山大桥路面温度低于5摄氏度，请做好防滑防冻准备。',type:'pre_alert',id:"3"},
            {text:'武青高速英汉收费站车流量较大，道路缓行，请发布绕行方案',type:'warn',id:"6"},
            {text:'有新消息，请查收',type:'msg',id:"2"},
        ]
        }
    },
    mounted(){
        const _this = this
        setInterval(()=>{
            console.log(111)
            _this.msg.push(_this.msg.shift())
        },3000)
    }
}
</script>


<style lang="scss" scoped>

.main{
    overflow:hidden;
    height:100%;
    width: 100%;
    position: relative;
}
.item{
    height: 32px;line-height: 32px;
    margin: 4px 0;
    background-color: rgba(255,255,255,0.1);
    /* position: absolute; */
    width: 100%;
    border-radius: 3px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.flip-list-move {
  transition: transform 1s;
}




.msg{
    &{
        background-color: rgba(0,122,204,0.6)
    }

    i{
        font-style: normal;
        font-size: 14px;padding-left: 8px;
    }
    i::after{
        content: '消息:';
        margin-left:4px;
    }
}

.warn{
    &{
        background-color: rgba(255, 187, 0, 0.6)
    }

    i{
        font-style: normal;
        font-size: 14px;padding-left: 8px;
    }
    i::after{
        content: '提醒:';
        margin-left:4px;
    }
}

.alert{
    &{
        background-color: rgba(255, 0, 0, 0.6)
    }

    i{
        font-style: normal;
        font-size: 14px;padding-left: 8px;
    }
    i::after{
        content: '报警:';
        margin-left:4px;
    }
}


.pre_alert{
    &{
        background-color: rgba(255, 51, 0, 0.6)
    }

    i{
        font-style: normal;
        font-size: 14px;padding-left: 8px;
    }
    i::after{
        content: '预警:';
        margin-left:4px;
    }
}
</style>

