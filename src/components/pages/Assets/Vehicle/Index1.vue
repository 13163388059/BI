<template lang="html">
  <div style="height:100%;width:100%" >
    <div class="container" style="height:50%;width:50%">
      <div class="item">
        <div class="block color color1">
          <cl1/>
        </div>
      </div>
    </div>
    <div class="container" style="height:50%;width:50%">
      <div class="item">
        <div class="block color color1">
          <cl2/>
        </div>
      </div>
    </div>
    <div class="container" style="height:50%;width:50%">
      <div class="item">
        <div class="block color color2">
          <cl3/>
        </div>
      </div>
    </div>
    <div class="container" style="height:50%;width:50%">
      <div class="item">
        <div class="block color color3">
           <cl4/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import cl1 from "../../../charts/Assets/Vehicle/CL1.vue";
import cl2 from "../../../charts/Assets/Vehicle/CL2.vue";
import cl3 from "../../../charts/Assets/Vehicle/CL3.vue";
import cl4 from "../../../charts/Assets/Vehicle/CL4.vue";

export default {
  name: "page-test",
  components: {
    ["cl1"]: cl1,
    ["cl2"]: cl2,
    ["cl3"]: cl3,
    ["cl4"]: cl4
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
  /* background-color: #20252b; */
  background: linear-gradient(to right, #242e3a, #242e3a);
  /* box-shadow: 0 3px 8px -1 rgba(0, 0, 0, 0.4); */
  border-radius: 0px;
  position: relative;
}

.color::after {
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
}
</style>
