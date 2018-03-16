<template lang="html">
  <div class="mask_menu" @mousewheel='test' :style="{opacity: isShow?1:0,transitionDelay:isShow?'0.1s':'0s'}">
    <div class="mask_menu__container" ref="menu">
      <div v-for='(item,index) in items' class="mask_menu__item" :style="{width:120*width+'px',height:120*height+'px'}">
        <div class="mask_menu__title" :style='{height:titleHeight+"px",lineHeight:titleHeight+"px",top:-1*titleHeight+"px"}'>{{index}}</div>

        <div v-for='(block,index) in item.blocks' :style="{width:block.width*120 +'px',height:block.height*120 +'px',padding:'3px'}" class="mask_menu__block">
          <div class="mask_menu__block__core" :style="{lineHeight: block.height*120 - 3*2 +'px'}">
            {{block.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bi-menu',
  props:['isShow'],
  data() {
    return {
      width:3,
      height:5,
      titleHeight: 48,
      items: [{
          title: '',
          blocks: [{
            name: '测试',
            width: 3,
            height: 1,
            float: 'left'
          },{
            name: '测试',
            width: 1,
            height: 1,
            float: 'left'
          },{
            name: '测试',
            width: 2,
            height: 1,
            float: 'left'
          },{
            name: '测试',
            width: 2,
            height: 1,
            float: 'left'
          },{
            name: '测试',
            width: 1,
            height: 1,
            float: 'left'
          },{
            name: '测试',
            width: 1,
            height: 2,
            float: 'left'
          },{
            name: '测试',
            width: 2,
            height: 1,
            float: 'left'
          },{
            name: '测试',
            width: 1,
            height: 1,
            float: 'left'
          },{
            name: '测试',
            width: 1,
            height: 1,
            float: 'left'
          }]
        },
        {
          title: '',
          blocks: [{
            name: '测试',
            width: 3,
            height: 1,
            float: 'left'
          }]
        },
        {
          title: '',
          blocks: [{
            name: '测试',
            width: 3,
            height: 1,
            float: 'left'
          }]
        },
        {
          title: '',
          blocks: [{
            name: '测试',
            width: 3,
            height: 1,
            float: 'left'
          }]
        },
        {
          title: '',
          blocks: [{
            name: '测试',
            width: 3,
            height: 1,
            float: 'left'
          }]
        },
        {
          title: '',
          blocks: [{
            name: '测试',
            width: 3,
            height: 1,
            float: 'left'
          }]
        },
      ],
      scrollObj:null
    }
  },
  methods: {
    test(test) {
      // if (test.deltaY > 0) {
      //   this.$refs.menu.scrollLeft += 80
      //   console.log()
      // } else {
      //   this.$refs.menu.scrollLeft -= 80
      // }

      this.scrollObj(test.deltaY)
    }
  },
  mounted(){
      this.scrollObj = CreacteScroll(this.$refs.menu)
  }
}



function CreacteScroll(dom) {
  let
    target = dom, // 目标 dom
    timeout = null, // timeout 对象
    step = 10, //动画帧数
    time = 50, // 时间参数
    before = 0, //起始点
    after = 0, // 目标点
    range = 0, // 滚动范围(滚动最大值),
    task = [] // 每帧位置

  function scroll() {
      console.log(task)
    if (task.length == 0)
      timeout = null
    else {
      dom.scrollLeft = task[0]
      let n = Math.ceil(task.length * (7/13))

          console.log(n)
      task.splice(0,n)

      timeout = requestAnimationFrame(scroll)

      //dom.scrollLeft = task.shift()
      //timeout = setTimeout(scroll, time/(2 > task.length?2:task.length))
    }

  }

  return function(direct) {
    before = task.length > 0 ? task[task.length - 1] : dom.scrollLeft
    range = dom.scrollWidth - dom.clientWidth
    after = (() => {
      let temp = direct + 80 * (direct > 0 ? 1 : -1) + before
      return (
        temp < 0 ?
        0 :
        (temp > range ?
          range :
          temp)
      )
    })()

    if (before == after)
      return

    for (let i = 0; i < step; i++) {
      if (i == step - 1)
        task.push(after)
      else
        task.push(before + (after - before) * (i + 1) / step)
    }

    if (timeout)
      return
    else
      scroll()

  }
}
</script>

<style lang="css" scoped>

.mask_menu{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  padding-top: 48px;
  background-color: transparent;
  transition: all 0.3 ease-out;
}
.mask_menu__container{
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0 96px 0 48px;
  white-space:nowrap;
}
.mask_menu__item{
  width: 360px;
  height:720px;
  display: inline-block;
  position: relative;
  top:50%;
  transform: translate(0,-50%);
  margin-left: 48px;
}
.mask_menu__title{
  text-align:left;
  position: absolute;
  left: 0;right: 0;
  color:#fff;
  font-size:24px
}
.mask_menu__block{
  float: left;
}
.mask_menu__block__core{
  position: relative;
  width:100%;
  height: 100%;
  background-color: aqua;
  border-radius: 1px;
  transition: all 0.5 ease-out;
}

/* .mask_menu__block__core:hover{
  transform: scale(1.01,1.01);
} */

.mask_menu__block__core:active{
  transform: scale(0.99,0.99);
}


</style>
