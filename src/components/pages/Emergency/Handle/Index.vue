<template lang="html">
  <div style="height:100%;width:100%" >
    <div class="container" style="height:50%;width:100%">
      <div class="item">
        <div class="block color color1">
           <sj1/>
        </div>
      </div>
    </div>
    <div class="container" style="height:50%;width:100%">
      <div class="item">
        <div class="block color color1">
           <sj2/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sj1 from "../../../charts/Emergency/Handle/SJ1.vue";
import sj2 from "../../../charts/Emergency/Handle/SJ2.vue";
export default {
  name: "page-test",
  components: {
    ["sj1"]: sj1,
    ["sj2"]: sj2
  },
  beforeDestroy(){
    this.$store.commit("charts/clean");
  }
};
</script>

<style lang="css" scoped>
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
  /* background: linear-gradient(to right, #242e3a, #242e3a); */
  border-radius: 0px;
  position: relative;
}

/* .color::after {
  content: "";
  position: absolute;
  display: block;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
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
} */
</style>
