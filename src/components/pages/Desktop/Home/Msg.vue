<template>
    <!-- <div class='main'> -->
        <transition-group name="flip-list" tag="div" class='main'>
        <div v-if='console.log(final_msg),final_msg.length' v-for="(item,index) in final_msg" class="item" :key='item.id' :class="item.type" >
            <i :class="'iconfont icon-'+item.type"></i> {{item.text}} 
        </div>
        <div v-if='!final_msg.length' :key='123' style="font-size:18px;position:absolute;left:50%;top:50%;transform: translate(-50%,-50%);">暂无数据</div>
  </transition-group>
  
    <!-- </div> -->
</template>

<script>
import uuidv4 from 'uuid/v4'

const polling = []
export default {
    name: 'bi-msgscroll',
    data() {
        return {
            msg: [],
            label: [
                { name: '预警', color: "rgb(200,60,30)", id: 1 ,type: 'pre_alert'},
                { name: '报警', color: "rgb(255,20,26)", id: 2 ,type: 'alert'},
                { name: '事故', color: "rgb(170,132,26)", id: 3 },
                { name: '施工', color: "#2aa515", id: 4 },
                { name: '隐患', color: "#d4237a", id: 5 },
                { name: '单兵', color: "#66ccff", id: 6 },
            ]
        }
    },
    computed: {
        label_map() {
            const res = this.label.reduce((res, i) => {
                if(i.type) res[i.id] = i.type;
                return res
            }, {})
            return res
        },
        final_msg(){
          return this.msg.filter(i=>i)
        }
    },
    mounted() {
        const _this = this

        setInterval(() => {
            _this.msg.push(_this.msg.shift())
        }, 3000)

        polling.push(glob.polling
            .sub('GIS_GetMarkerPointByBI', 'emergency')
            .on('GIS_GetMarkerPointByBI', 'emergency', ({ data }) => {
                let msg = []
               
                data.forEach(i => {
                   if( _this.label_map[i.MPEXDATA]){
                       msg.push({text:i.MPTEXT,type: _this.label_map[i.MPEXDATA],id:uuidv4()})
                   }
                })
                msg = msg.filter(i=>i)
                _this.msg = msg
            }))
    },
    beforeDestroy(){
      polling.forEach(i=>{
        glob.polling.cancel(i)
      })
    }
}
</script>


<style lang="scss" scoped>
.main {
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: relative;
}
.item {
  height: 32px;
  line-height: 32px;
  margin: 4px 0;
  background-color: rgba(255, 255, 255, 0.1);
  /* position: absolute; */
  width: 100%;
  border-radius: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.flip-list-move {
  transition: transform 1s;
}

.msg {
  & {
    background-color: rgba(0, 122, 204, 0.6);
  }

  i {
    font-style: normal;
    font-size: 14px;
    padding-left: 8px;
  }
  i::after {
    content: '消息:';
    margin-left: 4px;
  }
}

.warn {
  & {
    background-color: rgba(255, 187, 0, 0.6);
  }

  i {
    font-style: normal;
    font-size: 14px;
    padding-left: 8px;
  }
  i::after {
    content: '提醒:';
    margin-left: 4px;
  }
}

.alert {
  & {
    background-color: rgba(255, 0, 0, 0.6);
  }

  i {
    font-style: normal;
    font-size: 14px;
    padding-left: 8px;
  }
  i::after {
    content: '报警:';
    margin-left: 4px;
  }
}

.pre_alert {
  & {
    background-color: rgba(255, 51, 0, 0.6);
  }

  i {
    font-style: normal;
    font-size: 14px;
    padding-left: 8px;
  }
  i::after {
    content: '预警:';
    margin-left: 4px;
  }
}
</style>

