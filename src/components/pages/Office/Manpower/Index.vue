<template lang="html">
  <div style="height:100%;width:100%" >
   <div class="container" style="height:50%;width:100%">
      <div class="item">
        <div class="block color color1">
           <rl1/>
        </div>
      </div>
    </div>
     <div class="container" style="height:50%;width:50%">
      <div class="item">
        <div class="block color color1">
           <rl3/>
        </div>
      </div>
    </div>
     <div class="container" style="height:50%;width:50%">
      <div class="item">
        <div class="block color color1">
           <rl4/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import rl1 from "../../../charts/Office/Manpower/RL1.vue";
import rl3 from "../../../charts/Office/Manpower/RL3.vue";
import rl4 from "../../../charts/Office/Manpower/RL4.vue";

export default {
  name: "page-test",
  components: {
    ["rl1"]: rl1,
    ["rl3"]: rl3,
    ["rl4"]: rl4
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
