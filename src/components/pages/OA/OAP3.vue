<template lang="html">
  <div style="height:100%;width:100%" >
    <div class="container" style="height:50%;width:50%">
      <div class="item">
        <div class="block color color1">
          <oa8/>
        </div>
      </div>
    </div>
    <div class="container" style="height:50%;width:50%">
      <div class="item">
        <div class="block color color1">
          <oa10/>
        </div>
      </div>
    </div>
    <div class="container" style="height:50%;width:50%">
      <div class="item">
        <div class="block color color2">
          <oa4/>
        </div>
      </div>
    </div>
    <div class="container" style="height:50%;width:50%">
      <div class="item">
        <div class="block color color3">
           <oa6/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import oa4 from "../../charts/OA/OA4.vue";
import oa6 from "../../charts/OA/OA6.vue";
import oa8 from "../../charts/OA/OA8.vue";
import oa10 from "../../charts/OA/OA10.vue";

export default {
  name: "page-test",
  components: {
    ["oa4"]: oa4,
    ["oa6"]: oa6,
    ["oa8"]: oa8,
    ["oa10"]: oa10
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
