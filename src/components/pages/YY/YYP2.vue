<template lang="html">
  <div style="height:100%;width:100%" >
    <div class="container" style="height:50%;width:50%">
      <div class="item">
        <div class="block color color1">
          <yy5/>
        </div>
      </div>
    </div>
    <div class="container" style="height:50%;width:50%">
      <div class="item">
        <div class="block color color1">
          <yy6/>
        </div>
      </div>
    </div>
    <div class="container" style="height:50%;width:50%">
      <div class="item">
        <div class="block color color2">
          <yy7/>
        </div>
      </div>
    </div>
    <div class="container" style="height:50%;width:50%">
      <div class="item">
        <div class="block color color3">
           <yy8/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import yy5 from "../../charts/YY/YY5.vue";
import yy6 from "../../charts/YY/YY6.vue";
import yy7 from "../../charts/YY/YY7.vue";
import yy8 from "../../charts/YY/YY8.vue";

export default {
  name: "page-test",
  components: {
    ["yy5"]: yy5,
    ["yy6"]: yy6,
    ["yy7"]: yy7,
    ["yy8"]: yy8
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
