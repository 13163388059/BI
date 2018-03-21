<template>
  <div class="header">
    <img  class="header__logo" src="../../assets/mtlogo_hh_small.png" >
    <div  class="header__aside icon-bars" @click = 'aslide_click'></div>
    <div  class="header__menu el-icon-menu" @click = 'menu_click'></div>
    <div  class="header__seach_bar"></div>
    <div  class="header__name">
      欢迎你，BI 管理员
    </div>
    <div  class="header__message">
      <i class="el-icon-bell"></i>
    </div>
    <div  class="header__exit">
      <i class="el-icon-error"></i> 退出
    </div>
  </div>
</template>

<script>
export default {
  name:'bi-header',
  data() {
    return {
      data: [],
      defaultProps: {}
    };
  },
  methods: {
    aslide_click(){
      this.$emit('switchAside')
    },
    menu_click(){
      this.$emit('switchMenu')
    }
  }
};
</script>

<style scoped>
.header{
  padding-left: 336px;
  position: absolute;
  left: 0;top: 0;right: 0;
  height: 48px;
  z-index:2;
}

.header .header__logo{
  display: block;
  position: absolute;
  left: 10px;top:50%;transform: translate(0,-50%);
  height: 40px;width: 200px;
}

.header .header__aside{
  position: absolute;
  left: 240px;top:50%;transform: translate(0,-50%);
  width:48px;height: 48px;
  line-height:48px;text-align: center;
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
}

.header .header__aside:hover{
  background-color: rgba(255, 255, 255, 0.1)
}


.header .header__menu{
  position: absolute;
  left: 288px;top:50%;transform: translate(0,-50%);
  width:48px;height: 48px;
  line-height:48px;text-align: center;
  font-size: 20px;
  color: rgba(255, 255, 255,1);
}

.header .header__menu:hover{
  background-color: rgba(255, 255, 255, 0.1)
}

.header .header__exit{
  position: absolute;
  right: 0;top:50%;transform: translate(0,-50%);
  height: 48px;width: 120px;
  line-height: 48px;text-align: center;
  color: rgba(255, 255, 255, 1);
}

.header .header__exit:hover{
  background-color: rgba(255, 255, 255, 0.1);
  cursor: default;
}

.header .header__message{
  position: absolute;
  right: 120px;top:50%;transform: translate(0,-50%);
  height: 48px;width: 48px;
  line-height: 48px;text-align: center;
  color: rgba(255, 255, 255,1);
}

.header .header__message:hover{
  background-color: rgba(255, 255, 255, 0.1);
  cursor: default;
}

.header .header__name{
  position: absolute;
  right:168px; top:50%;transform:translate(0,-50%);
  height: 48px;line-height: 48px;width:140px;
  color: rgba(255, 255, 255,1);
  font-size: 14px;
  text-align: left;
  padding: 0 6px;
}
</style>
