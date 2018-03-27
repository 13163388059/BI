<template>
  <div id="app">
    <div :class='{"top_bar":true,"top_bar--hide_menu":!isMenuShow,"top_bar--show_menu":isMenuShow}'>
      <bi-header @switchAside ='switchAside' @switchMenu ='switchMenu' ></bi-header>
      <bi-menu :isShow ='isMenuShow' @closeMenu ='switchMenu'></bi-menu>
    </div>

      <div :class = ' {"body--hide_aside":!isSideShow,"body--show_aside":isSideShow}'>
        <bi-aside class = 'aside'></bi-aside>
        <div class = 'page_container' style="padding:8px">
          <transition name="fade">
          <router-view style="height:100%;width:100%;position:relative" />
          </transition>
        </div>
      </div>


  </div>
</template>

<script>
import Aside from './Aside.vue'
import Header from './Header.vue'
import Menu from './Menu.vue'

export default {
  name: 'app',
  components:{
    ['bi-aside']: Aside,
    ['bi-header']: Header,
    ['bi-menu']: Menu
  },
  data () {
    return {
      isSideShow: false,
      isMenuShow: false
    }
  },
  methods:{
    switchAside(){
      this.$data.isSideShow = !this.$data.isSideShow
      this.$store.commit('charts/resize',200)

    },
    switchMenu(){
      this.$data.isMenuShow = !this.$data.isMenuShow
    }
  },
  mounted(){
    window.onresize = () => {
      this.$store.commit('charts/resize')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(255,255,255,0.9);
  height: 100%;
  width: 100%;
  font-size: 14px;
  line-height: 1.4;
  position: relative;
  background-color: rgba(35, 47, 59, 1);
  overflow: hidden;
}

html,body{
  height: 100%;
  width:100%
}

*{
  box-sizing: border-box;
}

.top_bar{
  position: absolute;
  left: 0;top: 0;right: 0;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
  z-index:99;
  overflow: hidden;
  transition: all 0.2s ease
}
.top_bar--hide_menu{
  height: 48px;
  /* background-color: rgba(26, 39, 47, 1); */
  /* background-color: rgba(35, 47, 59, 1); */
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
}

.top_bar--show_menu{
  height: 100%;
  background-color: rgba(35, 47, 59, 0.7);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0);
}

.body{
  position: absolute;
  top: 48px;left: 240px;right: 0;bottom: 0;
  background-color: #58656e;
}

.body--hide_aside{
  position: absolute;
  top: 48px;left: 0;right: 0;bottom: 0;
  /* background: linear-gradient(to right, #1e2430, #1d2731); */
  background: linear-gradient(to right, rgb(37,45,56),rgb(43,51,61));
  transition: all 0.2s ease-out;
}

.body--show_aside{
  position: absolute;
  top: 48px;left: 240px;right: 0;bottom: 0;
  /* background: linear-gradient(to right, #1e2430, #1d2731); */
  
  background: linear-gradient(to right, rgb(37,45,56),rgb(43,51,61));
  transition: all 0.2s ease-out;
}

.aside{
  position: absolute;
  top: 0;left: -240px;bottom: 0;
  width: 240px;
  background-color: rgb(45,55,70);
  overflow: auto;
  padding-top: 32px;
}

.page_container{
  height: 100%;
  width: 100%;
  position: relative;
  padding: 20px;
  overflow: auto;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
