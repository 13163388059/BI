webpackJsonp([1],{1052:function(e,t,a){"use strict";function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var i,o=a(1365),s=a(1367),l=a(1369),c=a(1371),n=a(1373),d=a(1375),h=a(1377),u=a(1379),m=a(1381);t.a={name:"page-test",components:(i={},r(i,"fw1",o.a),r(i,"fw2",s.a),r(i,"fw3",l.a),r(i,"fw4",c.a),r(i,"fw5",n.a),r(i,"fw6",d.a),r(i,"fw7",h.a),r(i,"fw8",u.a),r(i,"fw12",m.a),i),beforeDestroy:function(){this.$store.commit("charts/clean")}}},1053:function(e,t,a){"use strict";function r(e){var t={title:{text:"备选项目库数量与总金额",subtext:"每年",x:"center"},tooltip:{trigger:"axis"},legend:{left:"left",data:["项目数","总金额(单位万元)"]},xAxis:[{type:"category",data:["2014","2015","2016","2017","2018"]}],yAxis:[{type:"value"}],series:[{name:"项目数",type:"bar",data:[2341,2253,2011,2891,1981]},{name:"总金额(单位万元)",type:"bar",data:[5300,5120,5e3,4300,3900]}]};e.setOption(t)}var i=a(970);Object(i.a)({},echarts),t.a={name:"page-test",data:function(){return{}},methods:{},mounted:function(){var e=echarts.init(this.$refs.chart,"darkk"),t=this;r(e),t.$store.commit("charts/push",e)}}},1054:function(e,t,a){"use strict";function r(e){var t={title:{text:"站所备选项目数量与总金额",subtext:"每年",x:"center"},tooltip:{trigger:"axis"},legend:{left:"left",data:["项目数","总金额(单位万元)"]},xAxis:[{type:"category",data:["2014","2015","2016","2017","2018"]}],yAxis:[{type:"value"}],series:[{name:"项目数",type:"bar",data:[230,215,201,291,191]},{name:"总金额(单位万元)",type:"bar",data:[520,510,500,430,390]}]};e.setOption(t)}var i=a(970);Object(i.a)({},echarts),t.a={name:"page-test",data:function(){return{}},methods:{},mounted:function(){var e=echarts.init(this.$refs.chart,"darkk"),t=this;r(e),t.$store.commit("charts/push",e)}}},1055:function(e,t,a){"use strict";function r(e){var t={title:{text:"备选项目完成情况",subtext:"当年",x:"center"},tooltip:{trigger:"axis"},legend:{left:"left",width:"50px",data:["项目数","总金额(单位万元)"]},xAxis:[{type:"category",data:["未开始","未完成","已完成"]}],yAxis:[{type:"value"}],series:[{name:"项目数",type:"bar",data:[132,19,319]},{name:"总金额(单位万元)",type:"bar",data:[130,69,290]}]};e.setOption(t)}var i=a(970);Object(i.a)({},echarts),t.a={name:"page-test",data:function(){return{}},methods:{},mounted:function(){var e=echarts.init(this.$refs.chart,"darkk"),t=this;r(e),t.$store.commit("charts/push",e)}}},1056:function(e,t,a){"use strict";function r(e){var t={title:{text:"处机关与站所合同情况",subtext:"每年",x:"center"},tooltip:{trigger:"axis"},legend:{left:"left",width:"280px",data:["合同数","完成合同数","总金额(单位万元)","完成金额(单位万元)"]},xAxis:[{type:"category",data:["处机关","站所"]}],yAxis:[{type:"value"}],series:[{name:"合同数",type:"bar",data:[132,69]},{name:"完成合同数",type:"bar",data:[113,59]},{name:"总金额(单位万元)",type:"bar",data:[320,190]},{name:"完成金额(单位万元)",type:"bar",data:[230,119]}]};e.setOption(t)}var i=a(970);Object(i.a)({},echarts),t.a={name:"page-test",data:function(){return{}},methods:{},mounted:function(){var e=echarts.init(this.$refs.chart,"darkk"),t=this;r(e),t.$store.commit("charts/push",e)}}},1057:function(e,t,a){"use strict";function r(e){var t={title:{text:"维修费排名前三的站所",subtext:"当年",x:"center"},tooltip:{trigger:"axis"},xAxis:[{type:"category",data:["十堰西","襄阳东","六里坪"]}],yAxis:[{type:"value"}],series:[{name:"维修金额(单位万元)",type:"bar",data:[132,119,103]}]};e.setOption(t)}var i=a(970);Object(i.a)({},echarts),t.a={name:"page-test",data:function(){return{}},methods:{},mounted:function(){var e=echarts.init(this.$refs.chart,"darkk"),t=this;r(e),t.$store.commit("charts/push",e)}}},1058:function(e,t,a){"use strict";function r(e){var t={title:{text:"维修费排名前三的项目",subtext:"当年",x:"center"},tooltip:{trigger:"axis"},xAxis:[{type:"category",data:["十堰西附属楼\n扩建以及翻新","襄阳东\n宿舍改造","六里坪\n行车道扩建"]}],yAxis:[{type:"value"}],series:[{name:"维修金额(单位万元)",type:"bar",data:[132,119,103]}]};e.setOption(t)}var i=a(970);Object(i.a)({},echarts),t.a={name:"page-test",data:function(){return{}},methods:{},mounted:function(){var e=echarts.init(this.$refs.chart,"darkk"),t=this;r(e),t.$store.commit("charts/push",e)}}},1059:function(e,t,a){"use strict";function r(e){var t={title:{text:"各站所维修费用类型占比",subtext:"当年",x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"left",top:"middle",data:["十堰西","上津","十漫","青曲","武当山","谷城","龙王"]},series:[{name:"修费类数量",type:"pie",radius:"55%",center:["50%","60%"],data:[{value:35,name:"十堰西"},{value:49,name:"上津"},{value:38,name:"十漫"},{value:20,name:"青曲"},{value:48,name:"武当山"},{value:18,name:"谷城"},{value:32,name:"龙王"}]}]};e.setOption(t)}var i=a(970);Object(i.a)({},echarts),t.a={name:"page-test",data:function(){return{}},methods:{},mounted:function(){var e=echarts.init(this.$refs.chart,"darkk"),t=this;r(e),t.$store.commit("charts/push",e)}}},1060:function(e,t,a){"use strict";function r(e){var t={title:{text:"应急维修项目情况",subtext:"当年",x:"center"},tooltip:{trigger:"axis"},legend:{left:"left",data:["项目数","金额(单位万元)"]},xAxis:[{type:"category",data:["十堰西","上津","十漫","青曲","武当山","谷城","龙王"]}],yAxis:[{type:"value"}],series:[{name:"项目数",type:"bar",data:[332,219,303,201,298,289,312]},{name:"金额(单位万元)",type:"bar",data:[132,119,103,101,98,89,112]}]};e.setOption(t)}var i=a(970);Object(i.a)({},echarts),t.a={name:"page-test",data:function(){return{}},methods:{},mounted:function(){var e=echarts.init(this.$refs.chart,"darkk"),t=this;r(e),t.$store.commit("charts/push",e)}}},1061:function(e,t,a){"use strict";function r(e){var t={title:{text:"新增备选项目数量与金额情况",subtext:"每年",x:"center"},tooltip:{trigger:"axis"},legend:{left:"left",width:"50px",data:["项目数量","项目金额(单位万元)"]},xAxis:{type:"category",boundaryGap:!1,data:[2014,2015,2016,2017,2018]},yAxis:{type:"value"},series:[{name:"项目数量",type:"line",smooth:!0,data:[198,230,210,334,167]},{name:"项目金额(单位万元)",type:"line",smooth:!0,data:[130,142,110,134,67]}]};e.setOption(t)}var i=a(970);Object(i.a)({},echarts),t.a={name:"page-test",data:function(){return{}},methods:{},mounted:function(){var e=echarts.init(this.$refs.chart,"darkk"),t=this;r(e),t.$store.commit("charts/push",e)}}},1363:function(e,t,a){var r=a(1364);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a(27)("798a0680",r,!0,{})},1364:function(e,t,a){t=e.exports=a(26)(!1),t.push([e.i,".container[data-v-714a8912]{float:left;position:relative}.padding[data-v-714a8912]{padding:8px}.item[data-v-714a8912]{width:100%;height:100%;padding:8px}.item>div[data-v-714a8912]{width:100%;height:100%}.block[data-v-714a8912]{border-radius:0;position:relative}",""])},1365:function(e,t,a){"use strict";var r=a(1053),i=a(1366),o=a(96),s=o(r.a,i.a,!1,null,null,null);t.a=s.exports},1366:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{ref:"chart",staticStyle:{height:"100%",width:"100%"}})},i=[],o={render:r,staticRenderFns:i};t.a=o},1367:function(e,t,a){"use strict";var r=a(1054),i=a(1368),o=a(96),s=o(r.a,i.a,!1,null,null,null);t.a=s.exports},1368:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{ref:"chart",staticStyle:{height:"100%",width:"100%"}})},i=[],o={render:r,staticRenderFns:i};t.a=o},1369:function(e,t,a){"use strict";var r=a(1055),i=a(1370),o=a(96),s=o(r.a,i.a,!1,null,null,null);t.a=s.exports},1370:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{ref:"chart",staticStyle:{height:"100%",width:"100%"}})},i=[],o={render:r,staticRenderFns:i};t.a=o},1371:function(e,t,a){"use strict";var r=a(1056),i=a(1372),o=a(96),s=o(r.a,i.a,!1,null,null,null);t.a=s.exports},1372:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{ref:"chart",staticStyle:{height:"100%",width:"100%"}})},i=[],o={render:r,staticRenderFns:i};t.a=o},1373:function(e,t,a){"use strict";var r=a(1057),i=a(1374),o=a(96),s=o(r.a,i.a,!1,null,null,null);t.a=s.exports},1374:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{ref:"chart",staticStyle:{height:"100%",width:"100%"}})},i=[],o={render:r,staticRenderFns:i};t.a=o},1375:function(e,t,a){"use strict";var r=a(1058),i=a(1376),o=a(96),s=o(r.a,i.a,!1,null,null,null);t.a=s.exports},1376:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{ref:"chart",staticStyle:{height:"100%",width:"100%"}})},i=[],o={render:r,staticRenderFns:i};t.a=o},1377:function(e,t,a){"use strict";var r=a(1059),i=a(1378),o=a(96),s=o(r.a,i.a,!1,null,null,null);t.a=s.exports},1378:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{ref:"chart",staticStyle:{height:"100%",width:"100%"}})},i=[],o={render:r,staticRenderFns:i};t.a=o},1379:function(e,t,a){"use strict";var r=a(1060),i=a(1380),o=a(96),s=o(r.a,i.a,!1,null,null,null);t.a=s.exports},1380:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{ref:"chart",staticStyle:{height:"100%",width:"100%"}})},i=[],o={render:r,staticRenderFns:i};t.a=o},1381:function(e,t,a){"use strict";var r=a(1061),i=a(1382),o=a(96),s=o(r.a,i.a,!1,null,null,null);t.a=s.exports},1382:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{ref:"chart",staticStyle:{height:"100%",width:"100%"}})},i=[],o={render:r,staticRenderFns:i};t.a=o},1383:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{height:"100%",width:"100%"}},[a("div",{staticClass:"container",staticStyle:{height:"33%",width:"38%"}},[a("div",{staticClass:"item"},[a("div",{staticClass:"block color color1"},[a("fw1")],1)])]),e._v(" "),a("div",{staticClass:"container",staticStyle:{height:"33%",width:"38%"}},[a("div",{staticClass:"item"},[a("div",{staticClass:"block color color1"},[a("fw2")],1)])]),e._v(" "),a("div",{staticClass:"container",staticStyle:{height:"33%",width:"24%"}},[a("div",{staticClass:"item"},[a("div",{staticClass:"block color color1"},[a("fw7")],1)])]),e._v(" "),a("div",{staticClass:"container",staticStyle:{height:"33%",width:"50%"}},[a("div",{staticClass:"item"},[a("div",{staticClass:"block color color1"},[a("fw4")],1)])]),e._v(" "),a("div",{staticClass:"container",staticStyle:{height:"33%",width:"25%"}},[a("div",{staticClass:"item"},[a("div",{staticClass:"block color color1"},[a("fw3")],1)])]),e._v(" "),a("div",{staticClass:"container",staticStyle:{height:"33%",width:"25%"}},[a("div",{staticClass:"item"},[a("div",{staticClass:"block color color1"},[a("fw5")],1)])]),e._v(" "),a("div",{staticClass:"container",staticStyle:{height:"33%",width:"38%"}},[a("div",{staticClass:"item"},[a("div",{staticClass:"block color color1"},[a("fw8")],1)])]),e._v(" "),a("div",{staticClass:"container",staticStyle:{height:"33%",width:"38%"}},[a("div",{staticClass:"item"},[a("div",{staticClass:"block color color1"},[a("fw12")],1)])]),e._v(" "),a("div",{staticClass:"container",staticStyle:{height:"33%",width:"24%"}},[a("div",{staticClass:"item"},[a("div",{staticClass:"block color color1"},[a("fw6")],1)])])])},i=[],o={render:r,staticRenderFns:i};t.a=o},947:function(e,t,a){"use strict";function r(e){a(1363)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(1052),o=a(1383),s=a(96),l=r,c=s(i.a,o.a,!1,l,"data-v-714a8912",null);t.default=c.exports},970:function(e,t,a){"use strict";function r(e,t){if(!t)return void function(e){"undefined"!=typeof console&&console&&console.error&&console.error(e)}("ECharts is not Loaded");t.registerTheme("darkk",{color:["#dd6b66","#759aa0","#e69d87","#8dc1a9","#ea7e53","#eedd78","#73a373","#73b9bc","#7289ab","#91ca8c","#f49f42"],backgroundColor:"rgba(51,51,51,0)",textStyle:{},title:{textStyle:{color:"#eeeeee"},subtextStyle:{color:"#aaaaaa"}},line:{itemStyle:{normal:{borderWidth:1}},lineStyle:{normal:{width:2}},symbolSize:4,symbol:"circle",smooth:!1},radar:{itemStyle:{normal:{borderWidth:1}},lineStyle:{normal:{width:2}},symbolSize:4,symbol:"circle",smooth:!1},bar:{itemStyle:{normal:{barBorderWidth:0,barBorderColor:"#ccc"},emphasis:{barBorderWidth:0,barBorderColor:"#ccc"}}},pie:{itemStyle:{normal:{borderWidth:0,borderColor:"#ccc"},emphasis:{borderWidth:0,borderColor:"#ccc"}}},scatter:{itemStyle:{normal:{borderWidth:0,borderColor:"#ccc"},emphasis:{borderWidth:0,borderColor:"#ccc"}}},boxplot:{itemStyle:{normal:{borderWidth:0,borderColor:"#ccc"},emphasis:{borderWidth:0,borderColor:"#ccc"}}},parallel:{itemStyle:{normal:{borderWidth:0,borderColor:"#ccc"},emphasis:{borderWidth:0,borderColor:"#ccc"}}},sankey:{itemStyle:{normal:{borderWidth:0,borderColor:"#ccc"},emphasis:{borderWidth:0,borderColor:"#ccc"}}},funnel:{itemStyle:{normal:{borderWidth:0,borderColor:"#ccc"},emphasis:{borderWidth:0,borderColor:"#ccc"}}},gauge:{itemStyle:{normal:{borderWidth:0,borderColor:"#ccc"},emphasis:{borderWidth:0,borderColor:"#ccc"}}},candlestick:{itemStyle:{normal:{color:"#fd1050",color0:"#0cf49b",borderColor:"#fd1050",borderColor0:"#0cf49b",borderWidth:1}}},graph:{itemStyle:{normal:{borderWidth:0,borderColor:"#ccc"}},lineStyle:{normal:{width:1,color:"#aaaaaa"}},symbolSize:4,symbol:"circle",smooth:!1,color:["#dd6b66","#759aa0","#e69d87","#8dc1a9","#ea7e53","#eedd78","#73a373","#73b9bc","#7289ab","#91ca8c","#f49f42"],label:{normal:{textStyle:{color:"#eeeeee"}}}},map:{itemStyle:{normal:{areaColor:"#eeeeee",borderColor:"#444444",borderWidth:.5},emphasis:{areaColor:"rgba(255,215,0,0.8)",borderColor:"#444444",borderWidth:1}},label:{normal:{textStyle:{color:"#000000"}},emphasis:{textStyle:{color:"rgb(100,0,0)"}}}},geo:{itemStyle:{normal:{areaColor:"#eeeeee",borderColor:"#444444",borderWidth:.5},emphasis:{areaColor:"rgba(255,215,0,0.8)",borderColor:"#444444",borderWidth:1}},label:{normal:{textStyle:{color:"#000000"}},emphasis:{textStyle:{color:"rgb(100,0,0)"}}}},categoryAxis:{axisLine:{show:!0,lineStyle:{color:"#eeeeee"}},axisTick:{show:!0,lineStyle:{color:"#eeeeee"}},axisLabel:{show:!0,textStyle:{color:"#eeeeee"}},splitLine:{show:!0,lineStyle:{color:["rgba(176,173,173,0.15)"]}},splitArea:{show:!1,areaStyle:{color:["#eeeeee"]}}},valueAxis:{axisLine:{show:!0,lineStyle:{color:"#eeeeee"}},axisTick:{show:!0,lineStyle:{color:"#eeeeee"}},axisLabel:{show:!0,textStyle:{color:"#eeeeee"}},splitLine:{show:!0,lineStyle:{color:["rgba(176,173,173,0.15)"]}},splitArea:{show:!1,areaStyle:{color:["#eeeeee"]}}},logAxis:{axisLine:{show:!0,lineStyle:{color:"#eeeeee"}},axisTick:{show:!0,lineStyle:{color:"#eeeeee"}},axisLabel:{show:!0,textStyle:{color:"#eeeeee"}},splitLine:{show:!0,lineStyle:{color:["rgba(176,173,173,0.15)"]}},splitArea:{show:!1,areaStyle:{color:["#eeeeee"]}}},timeAxis:{axisLine:{show:!0,lineStyle:{color:"#eeeeee"}},axisTick:{show:!0,lineStyle:{color:"#eeeeee"}},axisLabel:{show:!0,textStyle:{color:"#eeeeee"}},splitLine:{show:!0,lineStyle:{color:["rgba(176,173,173,0.15)"]}},splitArea:{show:!1,areaStyle:{color:["#eeeeee"]}}},toolbox:{iconStyle:{normal:{borderColor:"#999999"},emphasis:{borderColor:"#666666"}}},legend:{textStyle:{color:"#eeeeee"}},tooltip:{axisPointer:{lineStyle:{color:"#eeeeee",width:"1"},crossStyle:{color:"#eeeeee",width:"1"}}},timeline:{lineStyle:{color:"#eeeeee",width:1},itemStyle:{normal:{color:"#dd6b66",borderWidth:1},emphasis:{color:"#a9334c"}},controlStyle:{normal:{color:"#eeeeee",borderColor:"#eeeeee",borderWidth:.5},emphasis:{color:"#eeeeee",borderColor:"#eeeeee",borderWidth:.5}},checkpointStyle:{color:"#e43c59",borderColor:"rgba(194,53,49,0.5)"},label:{normal:{textStyle:{color:"#eeeeee"}},emphasis:{textStyle:{color:"#eeeeee"}}}},visualMap:{color:["#bf444c","#d88273","#f6efa6"]},dataZoom:{backgroundColor:"rgba(47,69,84,0)",dataBackgroundColor:"rgba(255,255,255,0.3)",fillerColor:"rgba(167,183,204,0.4)",handleColor:"#a7b7cc",handleSize:"100%",textStyle:{color:"#eeeeee"}},markPoint:{label:{normal:{textStyle:{color:"#eeeeee"}},emphasis:{textStyle:{color:"#eeeeee"}}}}})}t.a=r}});