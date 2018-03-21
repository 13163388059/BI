<template lang="html">
  <div style="height:100%;width:100%" >
    <div class="container" style="height:33%;width:25%">
      <div class="item">
        <div class="block color color1">
          <zg1/>
        </div>
      </div>
    </div>
    <div class="container" style="height:33%;width:75%">
      <div class="item">
        <div class="block color color1">
          <zg4/>
        </div>
      </div>
    </div>
    <div class="container" style="height:33%;width:25%">
      <div class="item">
        <div class="block color color1">
          <zg8/>
        </div>
      </div>
    </div>
    <div class="container" style="height:33%;width:75%">
      <div class="item">
        <div class="block color color1">
          <zg14/>
        </div>
      </div>
    </div>
    <div class="container" style="height:33%;width:25%">
      <div class="item">
        <div class="block color color1">
          <zg3/>
        </div>
      </div>
    </div>
    <div class="container" style="height:33%;width:75%">
      <div class="item">
        <div class="block color color1">
          <zg13/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import zg1 from "../../../charts/Office/Political/ZG1.vue";
import zg3 from "../../../charts/Office/Political/ZG3.vue";
import zg4 from "../../../charts/Office/Political/ZG4.vue";
import zg8 from "../../../charts/Office/Political/ZG8.vue";
import zg13 from "../../../charts/Office/Political/ZG13.vue";
import zg14 from "../../../charts/Office/Political/ZG14.vue";
export default {
  name: "page-test",
  components: {
    ["zg1"]: zg1,
    ["zg3"]: zg3,
    ["zg4"]: zg4,
    ["zg8"]: zg8,
    ["zg13"]: zg13,
    ["zg14"]: zg14
  },
  beforeDestroy() {
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
