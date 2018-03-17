<template lang="html">
  <div v-if='isShow' class="detail_panel">

    <div class="detail_panel--header">
      {{title}}
      <div class="detail_panel--close_btn el-icon-error" @click='close'></div>
    </div>
    <div class="detail_panel--info">
      {{info}}
    </div>

    <div class="detail_panel--camera__small">
      <div class="detail_panel--camera_title">标题</div>
      <div class="detail_panel--camera_content">
        <div style="background-color:red;width:117px;height:65px;margin:4px 4px 4px 0;float:left"></div>
        <div style="background-color:red;width:117px;height:65px;margin:4px 4px 4px 0;float:left"></div>
        <div style="background-color:red;width:117px;height:65px;margin:4px 4px 4px 0;float:left"></div>
        <div style="background-color:red;width:117px;height:65px;margin:4px 0 4px 0;float:left"></div>
      </div>

    </div>
    <div class="detail_panel--camera__main">
      <div class="detail_panel--camera_title">标题</div>
      <div class="detail_panel--camera_content">
        <div style="background-color:red;width:480px;height:270px;"></div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'bi-panel',

  data() {
    return {
      title:'管理所名字',
      isShow:true,
      info:`WebAssembly, 简称WASM, 是一种以安全有效的方式运行可移植程序的新技术，主要针对Web平台。 与 ASM.js类似, WASM的目标是对高级程序中间表示的适当低级抽象，即，WebAssembly代码旨在由编译器生成而不是由人来写。 W3C 社区组 拥有来自于最大Web浏览器厂商的代表，比如Google, Microsoft, Apple 和 Mozilla ，非常令人期待。

      如果你正在阅读本文，很可能你已经对WASM有一定的了解。如果你不了解，那么你可以好好看看 webassembly.org。就在本文发布的时候，WebAssembly 刚刚达成了 浏览器预览里程碑，这意味着WebAssembly版本1很可能和当前草案所描述的一致。本文的细节基于版本mvp-13。

      WebAssembly, 简称WASM, 是一种以安全有效的方式运行可移植程序的新技术，主要针对Web平台。 与 ASM.js类似, WASM的目标是对高级程序中间表示的适当低级抽象，即，WebAssembly代码旨在由编译器生成而不是由人来写。 W3C 社区组 拥有来自于最大Web浏览器厂商的代表，比如Google, Microsoft, Apple 和 Mozilla ，非常令人期待。

      如果你正在阅读本文，很可能你已经对WASM有一定的了解。如果你不了解，那么你可以好好看看 webassembly.org。就在本文发布的时候，WebAssembly 刚刚达成了 浏览器预览里程碑，这意味着WebAssembly版本1很可能和当前草案所描述的一致。本文的细节基于版本mvp-13。
      `
    }
  },
  methods: {
    close(){
      this.emit('close')
    }
  }

}
</script>

<style lang="css" scoped>

.detail_panel {
    position: absolute;
    /* background: linear-gradient(to right, #242e3a, #242e3a); */
    background: linear-gradient(to right, #242e3a, #242e3a);
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.6);
    right: 8px;
    top: 8px;
    bottom: 8px;
    max-height: 720px;
    width: 488px;
    z-index: 1;
    padding: 4px;
}

.detail_panel--header{
    height: 48px;font-size: 20px;font-weight: bold; color: #fff;
    line-height: 48px;
    text-align: left;
    padding-left: 4px
}
.detail_panel--camera__main{
  position: absolute;
  bottom: 4px;
  height: 318px;
  left: 4px;right: 4px;
}

.detail_panel--camera_title{
  height: 48px;line-height: 48px;
  font-size: 16px;
  text-align: left;
  color: #fff;
  padding-left: 4px
}

.detail_panel--camera__small{
    position: absolute;
    bottom: 326px;
    height: 121px;
    left: 4px;right: 4px;
}

.detail_panel--info{
    position: absolute;
    top:52px;
    padding:  0 16px;
    bottom:451px;
    overflow: auto;
}

.detail_panel--close_btn{
  position: absolute;
  right: 18px;
  top: 18px;
}

.detail_panel--close_btn:hover{
  color: rgba(255, 255, 255, 0.7);
}
</style>
