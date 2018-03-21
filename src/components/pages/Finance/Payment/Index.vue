<template lang="html">
  <div style="height:100%;width:100%" >
    <div class="container" style="height:50%;width:100%">
      <div class="item">
        <div class="block color color1">
           <pm1/>
        </div>
      </div>
    </div>
    <div class="container" style="height:50%;width:35%">
      <div class="item">
        <div class="block color color1">
           <pm2/>
        </div>
      </div>
    </div>
    <div class="container" style="height:50%;width:65%">
      <div class="item">
        <div class="block color color1">
           <pm3/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pm1 from "../../../charts/Finance/Payment/PM1.vue";
import pm2 from "../../../charts/Finance/Payment/PM2.vue";
import pm3 from "../../../charts/Finance/Payment/PM3.vue";
export default {
  name: "page-test",
  components: {
    ["pm1"]: pm1,
    ["pm2"]: pm2,
    ["pm3"]: pm3
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
