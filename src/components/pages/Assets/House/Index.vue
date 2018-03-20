<template lang="html">
  <div style="height:100%;width:100%" >
    <div class="container" style="height:33%;width:38%">
      <div class="item">
        <div class="block color color1">
           <fw1/>
        </div>
      </div>
    </div>
    <div class="container" style="height:33%;width:38%">
      <div class="item">
        <div class="block color color1">
           <fw2/>
        </div>
      </div>
    </div>
    <div class="container" style="height:33%;width:24%">
      <div class="item">
        <div class="block color color1">
           <fw7/>
        </div>
      </div>
    </div>
    <div class="container" style="height:33%;width:50%">
      <div class="item">
        <div class="block color color1">
           <fw4/>
        </div>
      </div>
    </div>
    <div class="container" style="height:33%;width:25%">
      <div class="item">
        <div class="block color color1">
           <fw3/>
        </div>
      </div>
    </div>
    <div class="container" style="height:33%;width:25%">
      <div class="item">
        <div class="block color color1">
           <fw5/>
        </div>
      </div>
    </div>
    <div class="container" style="height:33%;width:38%">
      <div class="item">
        <div class="block color color1">
           <fw8/>
        </div>
      </div>
    </div>
    <div class="container" style="height:33%;width:38%">
      <div class="item">
        <div class="block color color1">
           <fw12/>
        </div>
      </div>
    </div>
    <div class="container" style="height:33%;width:24%">
      <div class="item">
        <div class="block color color1">
           <fw6/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fw1 from "../../../charts/Assets/House/FW1.vue";
import fw2 from "../../../charts/Assets/House/FW2.vue";
import fw3 from "../../../charts/Assets/House/FW3.vue";
import fw4 from "../../../charts/Assets/House/FW4.vue";
import fw5 from "../../../charts/Assets/House/FW5.vue";
import fw6 from "../../../charts/Assets/House/FW6.vue";
import fw7 from "../../../charts/Assets/House/FW7.vue";
import fw8 from "../../../charts/Assets/House/FW8.vue";
import fw12 from "../../../charts/Assets/House/FW12.vue";

export default {
  name: "page-test",
  components: {
    ["fw1"]: fw1,
    ["fw2"]: fw2,
    ["fw3"]: fw3,
    ["fw4"]: fw4,
    ["fw5"]: fw5,
    ["fw6"]: fw6,
    ["fw7"]: fw7,
    ["fw8"]: fw8,
    ["fw12"]: fw12
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
