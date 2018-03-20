<template lang="html">
  <div style="height:100%;width:100%" >
    <div class="container" style="height:100%;width:20%">
      <div class="container" style="height:33%;width:100%">
        <div class="item">
          <div class="block color color1">
            <oa11/>
          </div>
        </div>
      </div>
      <div class="container" style="height:33%;width:100%">
        <div class="item">
          <div class="block color color1">
            <oa3/>
          </div>
        </div>
      </div>
      <div class="container" style="height:33%;width:100%">
        <div class="item">
          <div class="block color color1">
            <oa5/>
          </div>
        </div>
      </div>
    </div>
    <div class="container" style="height:100%;width:80%">
      <div class="container" style="height:33%;width:50%">
        <div class="item">
          <div class="block color color1">
            <oa7/>
          </div>
        </div>
      </div>
      <div class="container" style="height:33%;width:50%">
        <div class="item">
          <div class="block color color1">
            <oa9/>
          </div>
        </div>
      </div>
      <div class="container" style="height:34%;width:100%">
        <div class="item">
          <div class="block color color1">
            <oa13/>
          </div>
        </div>
      </div>
      <div class="container" style="height:33%;width:50%">
        <div class="item">
          <div class="block color color1">
            <oa1/>
          </div>
        </div>
      </div>
      <div class="container" style="height:33%;width:50%">
        <div class="item">
          <div class="block color color1">
            <oa15/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import oa11 from "../../../charts/Office/Integrated/OA11.vue";
import oa7 from "../../../charts/Office/Integrated/OA7.vue";
import oa3 from "../../../charts/Office/Integrated/OA3.vue";
import oa9 from "../../../charts/Office/Integrated/OA9.vue";
import oa5 from "../../../charts/Office/Integrated/OA5.vue";
import oa13 from "../../../charts/Office/Integrated/OA13.vue";
import oa1 from "../../../charts/Office/Integrated/OA1.vue";
import oa15 from "../../../charts/Office/Integrated/OA15.vue";

export default {
  name: "page-test",
  components: {
    ["oa3"]: oa3,
    ["oa5"]: oa5,
    ["oa7"]: oa7,
    ["oa9"]: oa9,
    ["oa1"]: oa1,
    ["oa11"]: oa11,
    ["oa13"]: oa13,
    ["oa15"]: oa15
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
