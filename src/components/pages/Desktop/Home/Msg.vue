<template>
    <!-- <div class='main'> -->
        <transition-group name="flip-list" tag="div" class='main'>
        <div v-for="(item,index) in msg" class="item" :key='item' >
            {{item}}
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
            2312312,
            13221313,
            2313132131,
            1231312421421,
            241412413123,
            3424242432,
            4213421412141
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

<style scoped>
.main{
    overflow:hidden;
    height:100%;
    width: 100%;
    position: relative;
}
.item{
    height: 32px;line-height: 32px;
    margin: 4px;
    background-color: rgba(255,255,255,0.1);
    /* position: absolute; */
    width: 100%;
}
.flip-list-move {
  transition: transform 1s;
}

</style>


