<template>
    <!-- <div class='main'> -->
        <transition-group name="flip-list" tag="div" class='main'>
        <div v-for="(item,index) in msg" class="item" :key='item' :class="item.type" >
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
            {text:32131321,type:'alert'},
            {text:32131321,type:'pre_alert'},
            {text:32131321,type:'warn'},
            {text:32131321,type:'warn'},
            {text:32131321,type:'msg'},
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

<style  scoped>

</style>

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
        content: '推送消息:';
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
        content: '系统提醒:';
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
        content: '报警信息:';
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
        content: '预警信息:';
        margin-left:4px;
    }
}
</style>

