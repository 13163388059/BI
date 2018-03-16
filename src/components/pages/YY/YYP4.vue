<template lang="html">
  <div style="height:100%;width:100%" >
    <div class="container" style="height:50%;width:33%">
      <div class="item">
        <div class="block color color1">
          <yy13/>
        </div>
      </div>
    </div>
    <div class="container" style="height:50%;width:33%">
      <div class="item">
        <div class="block color color1">
          <yy14/>
        </div>
      </div>
    </div>
    <div class="container" style="height:50%;width:33%">
      <div class="item">
        <div class="block color color2">
          <yy16/>
        </div>
      </div>
    </div>
    <div class="container" style="height:50%;width:50%">
      <div class="item">
        <div class="block color color3">
           <yy15/>
        </div>
      </div>
    </div>
    <div class="container" style="height:50%;width:50%">
      <div class="item">
        <div class="block color color3">
           <yy17/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import yy13 from "../../charts/YY/YY13.vue";
import yy14 from "../../charts/YY/YY14.vue";
import yy15 from "../../charts/YY/YY15.vue";
import yy16 from "../../charts/YY/YY16.vue";
import yy17 from "../../charts/YY/YY17.vue";

export default {
  name: "page-test",
  components: {
    ["yy13"]: yy13,
    ["yy14"]: yy14,
    ["yy15"]: yy15,
    ["yy16"]: yy16,
    ["yy17"]: yy17
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
