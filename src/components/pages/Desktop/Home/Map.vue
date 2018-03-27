<template lang="html">
  <div class="main">
    <ul class='label' style='position:absolute;z-index:3'>
      <li v-for="(v,i) in label" :key='v.name'><i :style='{backgroundColor:v.color}'></i>{{v.name}}</li>
    </ul>

    <div style="height:100%;width:100%" ref= 'map'></div>
  </div>
</template>

<script>
import { Tunnel, Bridge, Station, KMPile } from "./mapData";
import mapStyle from "./mapStyleNew";

export default {
  name: "bi-map",
  data() {
    return {
      label :[
        {name:'预警',color:"rgb(200,60,30)"},
        {name:'报警',color:"rgb(255,20,26)"},
        {name:'事故',color:"rgb(170,132,26)"},
        {name:'施工',color:"#2aa515"},
        {name:'隐患',color:"#d4237a"},
        {name:'单兵',color:"#66ccff"},
      ]
    };
  },
  methods: {
    panelClose() {
    },
    panelOpen(type) {
      if (type == "收费站/管理所" || type == "隧道" || type == "桥梁") {
        this.panelType = type;
        this.showPanel = true;
      } else {
        this.showPanel = false;
      }
    },
    barClick(e) {
    }
  },
  mounted() {
    if (document.getElementById("baiduMapApi")) renderMap(this.$refs.map);
    else loadBaiduMap(this.$refs.map);
  },
  beforeDestroy() {
    this.$store.commit("charts/clean");
    if(window.hlInterval) clearInterval(window.hlInterval)
  }
};

function loadBaiduMap(dom) {
  const baiduMap = document.createElement("script");
  baiduMap.id = "baiduMapApi";
  baiduMap.src =
    "https://api.map.baidu.com/api?v=2.0&ak=QBlDySuCDr4IfxS2BWcQ3hdXyIQQvBqj&s=1&callback=initMap";
  document.getElementsByTagName("head")[0].appendChild(baiduMap);

  window.initMap = function() {
    renderMap(dom);
  };
}



function renderMap(dom) {
  const map = new BMap.Map(dom);
 
  map.setMapStyle(mapStyle);
  map.centerAndZoom(new BMap.Point(112.187097,31.051866), 8);
  setBMapBoundary(map);
  var yujings = [
    {
      "MPID": "ddd97773-940b-4ad7-b386-f36b22700516",
      "MPTYPE": "EmergentEvent",
      "MPTYPENAME": "突发事件",
      "HIGHWAY": "G42S",
      "SECTION": "双向",
      "SECTIONID": 3,
      "PILENORS": "39.590",
      "PILENORE": "74.711",
      "MPCODE": "c648929d-3843-48c5-9852-03d0bbae605b",
      "MPNAME": "恶劣天气",
      "MPTEXT": "从汪集-总路咀发生事故！",
      "MPEXDATA": "-1",
      "PILENO": "39.590",
      "LOCWGSLON": null,
      "LOCWGSLAT": null,
      "LOCCUSLON": 114.728224586800000000000,
      "LOCCUSLAT": 30.795007322575000000000,
      "LOCRSLON": 114.728224586800000000000,
      "LOCRSLAT": 30.795007322575000000000,
      "LOCRELON": 115.060696265990000000000,
      "LOCRELAT": 30.706550477334000000000,
      "MPEXLASTDATA": "-1"
    },
    {
      "MPID": "bfafe601-e00a-4bb1-947c-edad5a919f78",
      "MPTYPE": "EmergentEvent",
      "MPTYPENAME": "突发事件",
      "HIGHWAY": "G42S",
      "SECTION": "武英向",
      "SECTIONID": 1,
      "PILENORS": "123.400",
      "PILENORE": "125.600",
      "MPCODE": "e9ffc0d3-4e1a-4258-a5f6-f43cb47f2707",
      "MPNAME": "凤凰关、濛濛山桥隧群危化品运输事故",
      "MPTEXT": "从凤凰关隧道-濛濛山隧道发生事故！",
      "MPEXDATA": "-1",
      "PILENO": "123.400",
      "LOCWGSLON": null,
      "LOCWGSLAT": null,
      "LOCCUSLON": 115.531038000000000000000,
      "LOCCUSLAT": 30.798802000000000000000,
      "LOCRSLON": 115.531038000000000000000,
      "LOCRSLAT": 30.798802000000000000000,
      "LOCRELON": 115.562428690340000000000,
      "LOCRELAT": 30.794419079451000000000,
      "MPEXLASTDATA": "-1"
    },
    {
      "MPID": "2c2b7710-7b95-49a1-b4e1-7e84504aa73b",
      "MPTYPE": "EmergentEvent",
      "MPTYPENAME": "突发事件",
      "HIGHWAY": "G42S",
      "SECTION": "武英向",
      "SECTIONID": 1,
      "PILENORS": "123.400",
      "PILENORE": "125.600",
      "MPCODE": "d120ac02-2cb8-45db-9890-387ed19b6bc0",
      "MPNAME": "凤凰关、濛濛山桥隧群危化品运输事故",
      "MPTEXT": "从凤凰关隧道-濛濛山隧道发生事故！",
      "MPEXDATA": "1",
      "PILENO": "123.500",
      "LOCWGSLON": null,
      "LOCWGSLAT": null,
      "LOCCUSLON": 115.531038000000000000000,
      "LOCCUSLAT": 30.798802000000000000000,
      "LOCRSLON": 115.531038000000000000000,
      "LOCRSLAT": 30.798802000000000000000,
      "LOCRELON": 115.562428690340000000000,
      "LOCRELAT": 30.794419079451000000000,
      "MPEXLASTDATA": "1"
    },
    {
      "MPID": "90cf847e-623d-4e82-a1ea-7e2e32b9c428",
      "MPTYPE": "EmergentEvent",
      "MPTYPENAME": "突发事件",
      "HIGHWAY": "G42S",
      "SECTION": "武英向",
      "SECTIONID": 1,
      "PILENORS": "135.841",
      "PILENORE": "157.412",
      "MPCODE": "8628926e-b587-46cf-8f70-69f99329d59c",
      "MPNAME": "省际收费广场车流量激增突发事件",
      "MPTEXT": "从英山-大枫树岭隧道发生事故！",
      "MPEXDATA": "-1",
      "PILENO": "135.841",
      "LOCWGSLON": null,
      "LOCWGSLAT": null,
      "LOCCUSLON": 115.656612716070000000000,
      "LOCCUSLAT": 30.765096313171000000000,
      "LOCRSLON": 115.656612716070000000000,
      "LOCRSLAT": 30.765096313171000000000,
      "LOCRELON": 115.857419000000000000000,
      "LOCRELAT": 30.805789000000000000000,
      "MPEXLASTDATA": "-1"
    },
    {
      "MPID": "26a42957-8159-4d44-b2fb-3a076e1d846f",
      "MPTYPE": "EmergentEvent",
      "MPTYPENAME": "突发事件",
      "HIGHWAY": "G42S",
      "SECTION": "武英向",
      "SECTIONID": 1,
      "PILENORS": "123.400",
      "PILENORE": "125.600",
      "MPCODE": "6346d91c-65a8-49f8-a6cd-140888158ccc",
      "MPNAME": "凤凰关、濛濛山桥隧群危化品运输事故",
      "MPTEXT": "从凤凰关隧道-濛濛山隧道发生事故！",
      "MPEXDATA": "1",
      "PILENO": "123.500",
      "LOCWGSLON": null,
      "LOCWGSLAT": null,
      "LOCCUSLON": 115.531038000000000000000,
      "LOCCUSLAT": 30.798802000000000000000,
      "LOCRSLON": 115.531038000000000000000,
      "LOCRSLAT": 30.798802000000000000000,
      "LOCRELON": 115.562428690340000000000,
      "LOCRELAT": 30.794419079451000000000,
      "MPEXLASTDATA": "1"
    },
    {
      "MPID": "0d3394aa-50da-470b-a209-6bd69aa90fb9",
      "MPTYPE": "EmergentEvent",
      "MPTYPENAME": "突发事件",
      "HIGHWAY": "G42",
      "SECTION": "麻武向",
      "SECTIONID": 1,
      "PILENORS": "693.100",
      "PILENORE": "693.100",
      "MPCODE": "3c9d7f67-4aa4-4c00-ac51-ca4c84d93434",
      "MPNAME": "恶劣天气",
      "MPTEXT": "从木子店服务区-木子店服务区发生事故！",
      "MPEXDATA": "-1",
      "PILENO": "693.100",
      "LOCWGSLON": null,
      "LOCWGSLAT": null,
      "LOCCUSLON": 115.428317696480000000000,
      "LOCCUSLAT": 31.246687094198000000000,
      "LOCRSLON": 115.428317696480000000000,
      "LOCRSLAT": 31.246687094198000000000,
      "LOCRELON": 115.428317696480000000000,
      "LOCRELAT": 31.246687094198000000000,
      "MPEXLASTDATA": "-1"
    },
    {
      "MPID": "580446df-812c-4a3f-bf5e-a42490d9f2af",
      "MPTYPE": "EmergentEvent",
      "MPTYPENAME": "突发事件",
      "HIGHWAY": "G42",
      "SECTION": "麻武向",
      "SECTIONID": 1,
      "PILENORS": "760.000",
      "PILENORE": "760.000",
      "MPCODE": "ab1f7176-dd00-49b7-afab-7845319244d5",
      "MPNAME": "交通事故",
      "MPTEXT": "从麻城东互通（收费站）-永佳河互通（收费站）发生事故！",
      "MPEXDATA": "3",
      "PILENO": "760.000",
      "LOCWGSLON": null,
      "LOCWGSLAT": null,
      "LOCCUSLON": 114.806849255580000000000,
      "LOCCUSLAT": 31.112310390047000000000,
      "LOCRSLON": 114.806849255580000000000,
      "LOCRSLAT": 31.112310390047000000000,
      "LOCRELON": 114.806849255580000000000,
      "LOCRELAT": 31.112310390047000000000,
      "MPEXLASTDATA": "3"
    }];
  
  var danbings=[
    {
      "MPID": "a9433210-fedb-4c5c-a03f-0e26b078ab79",
      "MPTYPE": "MobileDevice",
      "MPTYPENAME": "移动单兵",
      "HIGHWAY": null,
      "SECTION": null,
      "SECTIONID": null,
      "PILENORS": null,
      "PILENORE": null,
      "MPCODE": "355328061277055",
      "MPNAME": "超级管理员-手持移动单兵设备",
      "MPTEXT": null,
      "MPEXDATA": null,
      "PILENO": null,
      "LOCWGSLON": 114.429531000000000000000,
      "LOCWGSLAT": 30.493005000000000000000,
      "LOCCUSLON": 114.429531000000000000000,
      "LOCCUSLAT": 30.493005000000000000000,
      "LOCRSLON": null,
      "LOCRSLAT": null,
      "LOCRELON": null,
      "LOCRELAT": null,
      "MPEXLASTDATA": null
    },
    {
      "MPID": "d2358df1-843f-416e-8459-f5aba5fe200e",
      "MPTYPE": "MobileDevice",
      "MPTYPENAME": "移动单兵",
      "HIGHWAY": null,
      "SECTION": null,
      "SECTIONID": null,
      "PILENORS": null,
      "PILENORE": null,
      "MPCODE": "867459038675278",
      "MPNAME": "超级管理员-手持移动单兵设备",
      "MPTEXT": null,
      "MPEXDATA": null,
      "PILENO": null,
      "LOCWGSLON": 114.429516000000000000000,
      "LOCWGSLAT": 30.493021000000000000000,
      "LOCCUSLON": 114.429516000000000000000,
      "LOCCUSLAT": 30.493021000000000000000,
      "LOCRSLON": null,
      "LOCRSLAT": null,
      "LOCRELON": null,
      "LOCRELAT": null,
      "MPEXLASTDATA": null
    },
    {
      "MPID": "13940863-3a14-49aa-8155-2b3bfe3f8b65",
      "MPTYPE": "MobileDevice",
      "MPTYPENAME": "移动单兵",
      "HIGHWAY": null,
      "SECTION": null,
      "SECTIONID": null,
      "PILENORS": null,
      "PILENORE": null,
      "MPCODE": "869270024065541",
      "MPNAME": "陈恩-手持移动单兵设备",
      "MPTEXT": null,
      "MPEXDATA": null,
      "PILENO": null,
      "LOCWGSLON": 114.743594000000000000000,
      "LOCWGSLAT": 31.102282000000000000000,
      "LOCCUSLON": 114.743594000000000000000,
      "LOCCUSLAT": 31.102282000000000000000,
      "LOCRSLON": null,
      "LOCRSLAT": null,
      "LOCRELON": null,
      "LOCRELAT": null,
      "MPEXLASTDATA": null
    },
    {
      "MPID": "100524fd-1c3f-4fed-aa8b-5b37d16853d5",
      "MPTYPE": "MobileDevice",
      "MPTYPENAME": "移动单兵",
      "HIGHWAY": null,
      "SECTION": null,
      "SECTIONID": null,
      "PILENORS": null,
      "PILENORE": null,
      "MPCODE": "862911034115845",
      "MPNAME": "罗晓方-手持移动单兵设备",
      "MPTEXT": null,
      "MPEXDATA": null,
      "PILENO": null,
      "LOCWGSLON": 114.430057000000000000000,
      "LOCWGSLAT": 30.492941000000000000000,
      "LOCCUSLON": 114.430057000000000000000,
      "LOCCUSLAT": 30.492941000000000000000,
      "LOCRSLON": null,
      "LOCRSLAT": null,
      "LOCRELON": null,
      "LOCRELAT": null,
      "MPEXLASTDATA": null
    },
    {
      "MPID": "4e520a59-f669-43bd-87aa-a2b8575fe97f",
      "MPTYPE": "MobileDevice",
      "MPTYPENAME": "移动单兵",
      "HIGHWAY": null,
      "SECTION": null,
      "SECTIONID": null,
      "PILENORS": null,
      "PILENORE": null,
      "MPCODE": "864821039753326",
      "MPNAME": "超级管理员-手持移动单兵设备",
      "MPTEXT": null,
      "MPEXDATA": null,
      "PILENO": null,
      "LOCWGSLON": 114.428173000000000000000,
      "LOCWGSLAT": 30.490628000000000000000,
      "LOCCUSLON": 114.428173000000000000000,
      "LOCCUSLAT": 30.490628000000000000000,
      "LOCRSLON": null,
      "LOCRSLAT": null,
      "LOCRELON": null,
      "LOCRELAT": null,
      "MPEXLASTDATA": null
    },
    {
      "MPID": "c0654932-7dd4-489e-8f80-efd3f78cee5d",
      "MPTYPE": "MobileDevice",
      "MPTYPENAME": "移动单兵",
      "HIGHWAY": null,
      "SECTION": null,
      "SECTIONID": null,
      "PILENORS": null,
      "PILENORE": null,
      "MPCODE": "A200041262D1EF",
      "MPNAME": "OA管理员-手持移动单兵设备",
      "MPTEXT": null,
      "MPEXDATA": null,
      "PILENO": null,
      "LOCWGSLON": 115.061486000000000000000,
      "LOCWGSLAT": 30.703130000000000000000,
      "LOCCUSLON": 115.061486000000000000000,
      "LOCCUSLAT": 30.703130000000000000000,
      "LOCRSLON": null,
      "LOCRSLAT": null,
      "LOCRELON": null,
      "LOCRELAT": null,
      "MPEXLASTDATA": null
    },
    {
      "MPID": "0274ed69-0c8e-4c75-b5ef-9df69257dbfa",
      "MPTYPE": "MobileDevice",
      "MPTYPENAME": "移动单兵",
      "HIGHWAY": null,
      "SECTION": null,
      "SECTIONID": null,
      "PILENORS": null,
      "PILENORE": null,
      "MPCODE": "869789020224463",
      "MPNAME": "周笛-手持移动单兵设备",
      "MPTEXT": null,
      "MPEXDATA": null,
      "PILENO": null,
      "LOCWGSLON": 115.061293000000000000000,
      "LOCWGSLAT": 30.702815000000000000000,
      "LOCCUSLON": 115.061293000000000000000,
      "LOCCUSLAT": 30.702815000000000000000,
      "LOCRSLON": null,
      "LOCRSLAT": null,
      "LOCRELON": null,
      "LOCRELAT": null,
      "MPEXLASTDATA": null
    },
    {
      "MPID": "b897e957-dab7-4bdf-ba16-ffa592f659b2",
      "MPTYPE": "MobileDevice",
      "MPTYPENAME": "移动单兵",
      "HIGHWAY": null,
      "SECTION": null,
      "SECTIONID": null,
      "PILENORS": null,
      "PILENORE": null,
      "MPCODE": "A200043307D1EF",
      "MPNAME": "超级管理员-手持移动单兵设备",
      "MPTEXT": null,
      "MPEXDATA": null,
      "PILENO": null,
      "LOCWGSLON": 115.061467000000000000000,
      "LOCWGSLAT": 30.703341000000000000000,
      "LOCCUSLON": 115.061467000000000000000,
      "LOCCUSLAT": 30.703341000000000000000,
      "LOCRSLON": null,
      "LOCRSLAT": null,
      "LOCRELON": null,
      "LOCRELAT": null,
      "MPEXLASTDATA": null
    },
    {
      "MPID": "b6c67080-e954-47a8-bd48-d3a09823a124",
      "MPTYPE": "MobileDevice",
      "MPTYPENAME": "移动单兵",
      "HIGHWAY": null,
      "SECTION": null,
      "SECTIONID": null,
      "PILENORS": null,
      "PILENORE": null,
      "MPCODE": "864103026550811",
      "MPNAME": "超级管理员-手持移动单兵设备",
      "MPTEXT": null,
      "MPEXDATA": null,
      "PILENO": null,
      "LOCWGSLON": 114.429644000000000000000,
      "LOCWGSLAT": 30.493006000000000000000,
      "LOCCUSLON": 114.429644000000000000000,
      "LOCCUSLAT": 30.493006000000000000000,
      "LOCRSLON": null,
      "LOCRSLAT": null,
      "LOCRELON": null,
      "LOCRELAT": null,
      "MPEXLASTDATA": null
    },
    {
      "MPID": "e1c581df-34c5-4231-aef9-3257a1dea314",
      "MPTYPE": "MobileDevice",
      "MPTYPENAME": "移动单兵",
      "HIGHWAY": null,
      "SECTION": null,
      "SECTIONID": null,
      "PILENORS": null,
      "PILENORE": null,
      "MPCODE": "864664039122146",
      "MPNAME": "超级管理员-手持移动单兵设备",
      "MPTEXT": null,
      "MPEXDATA": null,
      "PILENO": null,
      "LOCWGSLON": 114.429742000000000000000,
      "LOCWGSLAT": 30.492935000000000000000,
      "LOCCUSLON": 114.429742000000000000000,
      "LOCCUSLAT": 30.492935000000000000000,
      "LOCRSLON": null,
      "LOCRSLAT": null,
      "LOCRELON": null,
      "LOCRELAT": null,
      "MPEXLASTDATA": null
    },
    {
      "MPID": "4cf027a9-1ed8-40a2-b1ee-f174f665ee58",
      "MPTYPE": "MobileDevice",
      "MPTYPENAME": "移动单兵",
      "HIGHWAY": null,
      "SECTION": null,
      "SECTIONID": null,
      "PILENORS": null,
      "PILENORE": null,
      "MPCODE": "355896054114352",
      "MPNAME": "超级管理员-手持移动单兵设备",
      "MPTEXT": null,
      "MPEXDATA": null,
      "PILENO": null,
      "LOCWGSLON": 114.429543000000000000000,
      "LOCWGSLAT": 30.493017000000000000000,
      "LOCCUSLON": 114.429543000000000000000,
      "LOCCUSLAT": 30.493017000000000000000,
      "LOCRSLON": null,
      "LOCRSLAT": null,
      "LOCRELON": null,
      "LOCRELAT": null,
      "MPEXLASTDATA": null
    },
    {
      "MPID": "46b89d4e-4a33-474c-9a43-d870012ecbb2",
      "MPTYPE": "MobileDevice",
      "MPTYPENAME": "移动单兵",
      "HIGHWAY": null,
      "SECTION": null,
      "SECTIONID": null,
      "PILENORS": null,
      "PILENORE": null,
      "MPCODE": "865767038977128",
      "MPNAME": "郭进-手持移动单兵设备",
      "MPTEXT": null,
      "MPEXDATA": null,
      "PILENO": null,
      "LOCWGSLON": 116.082082000000000000000,
      "LOCWGSLAT": 30.124577000000000000000,
      "LOCCUSLON": 116.082082000000000000000,
      "LOCCUSLAT": 30.124577000000000000000,
      "LOCRSLON": null,
      "LOCRSLAT": null,
      "LOCRELON": null,
      "LOCRELAT": null,
      "MPEXLASTDATA": null
    },
    {
      "MPID": "7461506f-e8cb-40e2-9f1e-1654c90efe16",
      "MPTYPE": "MobileDevice",
      "MPTYPENAME": "移动单兵",
      "HIGHWAY": null,
      "SECTION": null,
      "SECTIONID": null,
      "PILENORS": null,
      "PILENORE": null,
      "MPCODE": "864793029532517",
      "MPNAME": "超级管理员-手持移动单兵设备",
      "MPTEXT": null,
      "MPEXDATA": null,
      "PILENO": null,
      "LOCWGSLON": 86.934164000000000000000,
      "LOCWGSLAT": 27.990459000000000000000,
      "LOCCUSLON": 86.934164000000000000000,
      "LOCCUSLAT": 27.990459000000000000000,
      "LOCRSLON": null,
      "LOCRSLAT": null,
      "LOCRELON": null,
      "LOCRELAT": null,
      "MPEXLASTDATA": null
    },
    {
      "MPID": "841730eb-374b-42f2-a9d7-55a4ecac1f45",
      "MPTYPE": "MobileDevice",
      "MPTYPENAME": "移动单兵",
      "HIGHWAY": null,
      "SECTION": null,
      "SECTIONID": null,
      "PILENORS": null,
      "PILENORE": null,
      "MPCODE": "865790024812588",
      "MPNAME": "超级管理员-手持移动单兵设备",
      "MPTEXT": null,
      "MPEXDATA": null,
      "PILENO": null,
      "LOCWGSLON": 112.934063000000000000000,
      "LOCWGSLAT": 31.921742000000000000000,
      "LOCCUSLON": 112.934063000000000000000,
      "LOCCUSLAT": 31.921742000000000000000,
      "LOCRSLON": null,
      "LOCRSLAT": null,
      "LOCRELON": null,
      "LOCRELAT": null,
      "MPEXLASTDATA": null
    },
    {
      "MPID": "813fd7aa-4106-4dc9-bb4c-d52bc712211e",
      "MPTYPE": "MobileDevice",
      "MPTYPENAME": "移动单兵",
      "HIGHWAY": null,
      "SECTION": null,
      "SECTIONID": null,
      "PILENORS": null,
      "PILENORE": null,
      "MPCODE": "869789020148407",
      "MPNAME": "超级管理员-手持移动单兵设备",
      "MPTEXT": null,
      "MPEXDATA": null,
      "PILENO": null,
      "LOCWGSLON": 115.061584000000000000000,
      "LOCWGSLAT": 30.703034000000000000000,
      "LOCCUSLON": 115.061584000000000000000,
      "LOCCUSLAT": 30.703034000000000000000,
      "LOCRSLON": null,
      "LOCRSLAT": null,
      "LOCRELON": null,
      "LOCRELAT": null,
      "MPEXLASTDATA": null
    },
    {
      "MPID": "813fd7aa-4106-4dc9-bb4c-d52bc712222e",
      "MPTYPE": "MobileDevice",
      "MPTYPENAME": "移动单兵",
      "HIGHWAY": null,
      "SECTION": null,
      "SECTIONID": null,
      "PILENORS": null,
      "PILENORE": null,
      "MPCODE": "869789020148407",
      "MPNAME": "超级管理员-手持移动单兵设备",
      "MPTEXT": null,
      "MPEXDATA": null,
      "PILENO": null,
      "LOCWGSLON": 114.297037000000000000000,
      "LOCWGSLAT": 30.789154000000000000000,
      "LOCCUSLON": 114.297037000000000000000,
      "LOCCUSLAT": 30.789154000000000000000,
      "LOCRSLON": null,
      "LOCRSLAT": null,
      "LOCRELON": null,
      "LOCRELAT": null,
      "MPEXLASTDATA": null
    }];

 var jingbaos=[
    {
      "MPID": "0ba886d1-00fd-496d-ba3d-bc479fac5f25",
      "MPTYPE": "jingbao",
      "MPTYPENAME": "警报",
      "HIGHWAY": "",
      "SECTION": "",
      "SECTIONID": null,
      "PILENORS": null,
      "PILENORE": null,
      "MPCODE": "G42421100K0010",
      "MPNAME": "K687",
      "MPTEXT": "",
      "MPEXDATA": "",
      "PILENO": "687",
      "LOCWGSLON": 115.424601660000000000000,
      "LOCWGSLAT": 31.246948360000000000000,
      "LOCCUSLON": 115.436632978170000000000,
      "LOCCUSLAT": 31.251327365502000000000,
      "LOCRSLON": null,
      "LOCRSLAT": null,
      "LOCRELON": null,
      "LOCRELAT": null,
      "MPEXLASTDATA": null
    },
    {	
      "MPID": "0ba886d1-00fd-496d-ba3d-bc479fac5f25",
      "MPTYPE": "jingbao",
      "MPTYPENAME": "警报",
      "HIGHWAY": "",
      "SECTION": "",
      "SECTIONID": null,
      "PILENORS": null,
      "PILENORE": null,
      "MPCODE": "G42421100K0010",
      "MPNAME": "K687",
      "MPTEXT": "",
      "MPEXDATA": "",
      "PILENO": "687",
      "LOCWGSLON": 115.354820010000000000000,
      "LOCWGSLAT": 31.195336650000000000000,
      "LOCCUSLON": 115.366922132140000000000,
      "LOCCUSLAT": 31.199178079331000000000,
      "LOCRSLON": null,
      "LOCRSLAT": null,
      "LOCRELON": null,
      "LOCRELAT": null,
      "MPEXLASTDATA": null
    },
    {	
      "MPID": "0ba886d1-00fd-496d-ba3d-bc479fac5f25",
      "MPTYPE": "jingbao",
      "MPTYPENAME": "警报",
      "HIGHWAY": "",
      "SECTION": "",
      "SECTIONID": null,
      "PILENORS": null,
      "PILENORE": null,
      "MPCODE": "G42421100K0010",
      "MPNAME": "K687",
      "MPTEXT": "",
      "MPEXDATA": "",
      "PILENO": "687",
      "LOCWGSLON": 115.252336650000000000000,
      "LOCWGSLAT": 31.182583300000000000000,
      "LOCCUSLON": 115.264304531380000000000,
      "LOCCUSLAT": 31.186108211200000000000,
      "LOCRSLON": null,
      "LOCRSLAT": null,
      "LOCRELON": null,
      "LOCRELAT": null,
      "MPEXLASTDATA": null
    },
    {	
      "MPID": "0ba886d1-00fd-496d-ba3d-bc479fac5f25",
      "MPTYPE": "jingbao",
      "MPTYPENAME": "警报",
      "HIGHWAY": "",
      "SECTION": "",
      "SECTIONID": null,
      "PILENORS": null,
      "PILENORE": null,
      "MPCODE": "G42421100K0010",
      "MPNAME": "K687",
      "MPTEXT": "",
      "MPEXDATA": "",
      "PILENO": "687",
      "LOCWGSLON": 115.130486690000000000000,
      "LOCWGSLAT": 31.219596670000000000000,
      "LOCCUSLON": 115.142661211850000000000,
      "LOCCUSLAT": 31.223316396720000000000,
      "LOCRSLON": null,
      "LOCRSLAT": null,
      "LOCRELON": null,
      "LOCRELAT": null,
      "MPEXLASTDATA": null
    },
    {	
      "MPID": "0ba886d1-00fd-496d-ba3d-bc479fac5f25",
      "MPTYPE": "jingbao",
      "MPTYPENAME": "警报",
      "HIGHWAY": "",
      "SECTION": "",
      "SECTIONID": null,
      "PILENORS": null,
      "PILENORE": null,
      "MPCODE": "G42421100K0010",
      "MPNAME": "K687",
      "MPTEXT": "",
      "MPEXDATA": "",
      "PILENO": "687",
      "LOCWGSLON": 114.577018300000000000000,
      "LOCWGSLAT": 31.032286700000000000000,
      "LOCCUSLON": 114.588565208780000000000,
      "LOCCUSLAT": 31.036089587513000000000,
      "LOCRSLON": null,
      "LOCRSLAT": null,
      "LOCRELON": null,
      "LOCRELAT": null,
      "MPEXLASTDATA": null
    },
    {	
      "MPID": "0ba886d1-00fd-496d-ba3d-bc479fac5f25",
      "MPTYPE": "jingbao",
      "MPTYPENAME": "警报",
      "HIGHWAY": "",
      "SECTION": "",
      "SECTIONID": null,
      "PILENORS": null,
      "PILENORE": null,
      "MPCODE": "G42421100K0010",
      "MPNAME": "K687",
      "MPTEXT": "",
      "MPEXDATA": "",
      "PILENO": "687",
      "LOCWGSLON": 115.316034000000000000000,
      "LOCWGSLAT": 30.720817000000000000000,
      "LOCCUSLON": 115.322444643530000000000,
      "LOCCUSLAT": 30.727155735850000000000,
      "LOCRSLON": null,
      "LOCRSLAT": null,
      "LOCRELON": null,
      "LOCRELAT": null,
      "MPEXLASTDATA": null
    },
    {	
      "MPID": "0ba886d1-00fd-496d-ba3d-bc479fac5f25",
      "MPTYPE": "jingbao",
      "MPTYPENAME": "警报",
      "HIGHWAY": "",
      "SECTION": "",
      "SECTIONID": null,
      "PILENORS": null,
      "PILENORE": null,
      "MPCODE": "G42421100K0010",
      "MPNAME": "K687",
      "MPTEXT": "",
      "MPEXDATA": "",
      "PILENO": "687",
      "LOCWGSLON": 115.493929000000000000000,
      "LOCWGSLAT": 30.788184000000000000000,
      "LOCCUSLON": 115.500508706760000000000,
      "LOCCUSLAT": 30.793852735855000000000,
      "LOCRSLON": null,
      "LOCRSLAT": null,
      "LOCRELON": null,
      "LOCRELAT": null,
      "MPEXLASTDATA": null
    }];

  var shigus=[
    {
      "MPID": "0ba886d1-00fd-496d-ba3d-bc479fac5f25",
      "MPTYPE": "jingbao",
      "MPTYPENAME": "警报",
      "HIGHWAY": "",
      "SECTION": "",
      "SECTIONID": null,
      "PILENORS": null,
      "PILENORE": null,
      "MPCODE": "G42421100K0010",
      "MPNAME": "K687",
      "MPTEXT": "",
      "MPEXDATA": "",
      "PILENO": "687",
      "LOCWGSLON": 115.581031000000000000000,
      "LOCWGSLAT": 30.772983000000000000000,
      "LOCCUSLON": 115.587496163660000000000,
      "LOCCUSLAT": 30.779141764743000000000,
      "LOCRSLON": null,
      "LOCRSLAT": null,
      "LOCRELON": null,
      "LOCRELAT": null,
      "MPEXLASTDATA": null
    },
    {
      "MPID": "0ba886d1-00fd-496d-ba3d-bc479fac5f25",
      "MPTYPE": "jingbao",
      "MPTYPENAME": "警报",
      "HIGHWAY": "",
      "SECTION": "",
      "SECTIONID": null,
      "PILENORS": null,
      "PILENORE": null,
      "MPCODE": "G42421100K0010",
      "MPNAME": "K687",
      "MPTEXT": "",
      "MPEXDATA": "",
      "PILENO": "687",
      "LOCWGSLON": 115.692788000000000000000,
      "LOCWGSLAT": 30.779137000000000000000,
      "LOCCUSLON": 115.699216472480000000000,
      "LOCCUSLAT": 30.785409370674000000000,
      "LOCRSLON": null,
      "LOCRSLAT": null,
      "LOCRELON": null,
      "LOCRELAT": null,
      "MPEXLASTDATA": null
    },
    {
      "MPID": "0ba886d1-00fd-496d-ba3d-bc479fac5f25",
      "MPTYPE": "jingbao",
      "MPTYPENAME": "警报",
      "HIGHWAY": "",
      "SECTION": "",
      "SECTIONID": null,
      "PILENORS": null,
      "PILENORE": null,
      "MPCODE": "G42421100K0010",
      "MPNAME": "K687",
      "MPTEXT": "",
      "MPEXDATA": "",
      "PILENO": "687",
       "LOCWGSLON": 114.690927000000000000000,
      "LOCWGSLAT": 30.788381000000000000000,
      "LOCCUSLON": 114.697414311590000000000,
      "LOCCUSLAT": 30.794395490704000000000,
      "LOCRSLON": null,
      "LOCRSLAT": null,
      "LOCRELON": null,
      "LOCRELAT": null,
      "MPEXLASTDATA": null
    },
    {
      "MPID": "0ba886d1-00fd-496d-ba3d-bc479fac5f25",
      "MPTYPE": "jingbao",
      "MPTYPENAME": "警报",
      "HIGHWAY": "",
      "SECTION": "",
      "SECTIONID": null,
      "PILENORS": null,
      "PILENORE": null,
      "MPCODE": "G42421100K0010",
      "MPNAME": "K687",
      "MPTEXT": "",
      "MPEXDATA": "",
      "PILENO": "687",
       "LOCWGSLON": 116.083121000000000000000,
      "LOCWGSLAT": 30.117002000000000000000,
      "LOCCUSLON": 116.089675276790000000000,
      "LOCCUSLAT": 30.122780344145000000000,
      "LOCRSLON": null,
      "LOCRSLAT": null,
      "LOCRELON": null,
      "LOCRELAT": null,
      "MPEXLASTDATA": null
    },
    {
      "MPID": "0ba886d1-00fd-496d-ba3d-bc479fac5f25",
      "MPTYPE": "jingbao",
      "MPTYPENAME": "警报",
      "HIGHWAY": "",
      "SECTION": "",
      "SECTIONID": null,
      "PILENORS": null,
      "PILENORE": null,
      "MPCODE": "G42421100K0010",
      "MPNAME": "K687",
      "MPTEXT": "",
      "MPEXDATA": "",
      "PILENO": "687",
        "LOCWGSLON": 115.971423000000000000000,
      "LOCWGSLAT": 30.049315000000000000000,
      "LOCCUSLON": 115.978014483990000000000,
      "LOCCUSLAT": 30.055004246454000000000,
      "LOCRSLON": null,
      "LOCRSLAT": null,
      "LOCRELON": null,
      "LOCRELAT": null,
      "MPEXLASTDATA": null
    },
    {
      "MPID": "0ba886d1-00fd-496d-ba3d-bc479fac5f25",
      "MPTYPE": "jingbao",
      "MPTYPENAME": "警报",
      "HIGHWAY": "",
      "SECTION": "",
      "SECTIONID": null,
      "PILENORS": null,
      "PILENORE": null,
      "MPCODE": "G42421100K0010",
      "MPNAME": "K687",
      "MPTEXT": "",
      "MPEXDATA": "",
      "PILENO": "687",
       "LOCWGSLON": 115.812214000000000000000,
      "LOCWGSLAT": 30.025346000000000000000,
      "LOCCUSLON": 115.818660512380000000000,
      "LOCCUSLAT": 30.031629647229000000000,
      "LOCRSLON": null,
      "LOCRSLAT": null,
      "LOCRELON": null,
      "LOCRELAT": null,
      "MPEXLASTDATA": null
    },
    {
      "MPID": "0ba886d1-00fd-496d-ba3d-bc479fac5f25",
      "MPTYPE": "jingbao",
      "MPTYPENAME": "警报",
      "HIGHWAY": "",
      "SECTION": "",
      "SECTIONID": null,
      "PILENORS": null,
      "PILENORE": null,
      "MPCODE": "G42421100K0010",
      "MPNAME": "K687",
      "MPTEXT": "",
      "MPEXDATA": "",
      "PILENO": "687",
      "LOCWGSLON": 115.394979000000000000000,
      "LOCWGSLAT": 30.061403000000000000000,
      "LOCCUSLON": 115.401541419210000000000,
      "LOCCUSLAT": 30.067157571111000000000,
      "LOCRSLON": null,
      "LOCRSLAT": null,
      "LOCRELON": null,
      "LOCRELAT": null,
      "MPEXLASTDATA": null
    }];

var shigongs=[
    {
      "MPID": "0ba886d1-00fd-496d-ba3d-bc479fac5f25",
      "MPTYPE": "jingbao",
      "MPTYPENAME": "警报",
      "HIGHWAY": "",
      "SECTION": "",
      "SECTIONID": null,
      "PILENORS": null,
      "PILENORE": null,
      "MPCODE": "G42421100K0010",
      "MPNAME": "K687",
      "MPTEXT": "",
      "MPEXDATA": "",
      "PILENO": "687",
      "LOCWGSLON": 115.269863000000000000000,
      "LOCWGSLAT": 30.208462000000000000000,
      "LOCCUSLON": 115.276422522530000000000,
      "LOCCUSLAT": 30.214156233744000000000,
      "LOCRSLON": null,
      "LOCRSLAT": null,
      "LOCRELON": null,
      "LOCRELAT": null,
      "MPEXLASTDATA": null
    },
    {
      "MPID": "0ba886d1-00fd-496d-ba3d-bc479fac5f25",
      "MPTYPE": "jingbao",
      "MPTYPENAME": "警报",
      "HIGHWAY": "",
      "SECTION": "",
      "SECTIONID": null,
      "PILENORS": null,
      "PILENORE": null,
      "MPCODE": "G42421100K0010",
      "MPNAME": "K687",
      "MPTEXT": "",
      "MPEXDATA": "",
      "PILENO": "687",
       "LOCWGSLON": 115.981618000000000000000,
      "LOCWGSLAT": 29.806070000000000000000,
      "LOCCUSLON": 115.988220005610000000000,
      "LOCCUSLAT": 29.811726620230000000000,
      "LOCRSLON": null,
      "LOCRSLAT": null,
      "LOCRELON": null,
      "LOCRELAT": null,
      "MPEXLASTDATA": null
    },
    {
      "MPID": "0ba886d1-00fd-496d-ba3d-bc479fac5f25",
      "MPTYPE": "jingbao",
      "MPTYPENAME": "警报",
      "HIGHWAY": "",
      "SECTION": "",
      "SECTIONID": null,
      "PILENORS": null,
      "PILENORE": null,
      "MPCODE": "G42421100K0010",
      "MPNAME": "K687",
      "MPTEXT": "",
      "MPEXDATA": "",
      "PILENO": "687",
      "LOCWGSLON": 115.954725000000000000000,
      "LOCWGSLAT": 29.937705000000000000000,
      "LOCCUSLON": 115.961249315200000000000,
      "LOCCUSLAT": 29.943620412911000000000,
      "LOCRSLON": null,
      "LOCRSLAT": null,
      "LOCRELON": null,
      "LOCRELAT": null,
      "MPEXLASTDATA": null
    },
    {
      "MPID": "0ba886d1-00fd-496d-ba3d-bc479fac5f25",
      "MPTYPE": "jingbao",
      "MPTYPENAME": "警报",
      "HIGHWAY": "",
      "SECTION": "",
      "SECTIONID": null,
      "PILENORS": null,
      "PILENORE": null,
      "MPCODE": "G42421100K0010",
      "MPNAME": "K687",
      "MPTEXT": "",
      "MPEXDATA": "",
      "PILENO": "687",
      "LOCWGSLON": 115.914884000000000000000,
      "LOCWGSLAT": 30.018911000000000000000,
      "LOCCUSLON": 115.921313342980000000000,
      "LOCCUSLAT": 30.025250534972000000000,
      "LOCRSLON": null,
      "LOCRSLAT": null,
      "LOCRELON": null,
      "LOCRELAT": null,
      "MPEXLASTDATA": null
    }];


 window._map = map;
  yujings.forEach(s=>{
    Evens(s,map,"#F43C12");
  });
  danbings.forEach(s=>{
    Evens(s,map,"#66CCFF");
  });
  jingbaos.forEach(s=>{
    Evens(s,map,"#FF141A");
  });
  shigus.forEach(s=>{
    Evens(s,map,"#AA841A");
  });
  shigongs.forEach(s=>{
    Evens(s,map,"#2AA515");
  });
}

function Evens(markerPoint,map,color){
    var isAnimation=true;
    var mPoint = new BMap.Point(markerPoint.LOCCUSLON, markerPoint.LOCCUSLAT);
    if (isAnimation) {
        var hlRadius = 300;
        var hlcircle = new BMap.Circle(mPoint, hlRadius, { strokeColor: color, strokeWeight: 10, strokeOpacity: 0.8 });
        map.addOverlay(hlcircle);
        var hlInterval_index = hlRadius;
        var hlInterval = setInterval(function () {
            hlcircle.setRadius(hlInterval_index);
            hlInterval_index -= 10;
            if (hlInterval_index < 0) hlInterval_index = hlRadius;
        }, 50);
        window.hlInterval = hlInterval;
    }
}

function BaiduMap(type) {
  const map = window._map;
  let point = new BMap.Point(113.235743,31.281263);
  map.centerAndZoom(point, 10);
  createMarker(map, type);
}

function setBMapBoundary(map) {
  var bdary = new BMap.Boundary();
  bdary.get("湖北省", function(rshb) {
    var pl2 = new BMap.Polyline(rshb.boundaries[0], {
      strokeColor: "#4CAAFF",
      strokeWeight: 3,
      strokeOpacity: 0.9,
      strokeStyle: "dashed",
      enableMassClear: false
    });
    map.addOverlay(pl2);
  });
}
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.label{
  position: absolute;
  right: 24px;
  top:24px;
  background: rgba(0,0,0,0.4);
  font-size: 16px;
  box-shadow: 0 0 96px 32px rgba(0,0,0,0.5);
  list-style-type: none;
  i{
    height: 14px;
    width: 14px;
    border-radius: 7px;
    float: left;
    margin: 3px 6px 0 0 ;
    box-shadow: 0 1px 3px 0 rgba(255,255,255,0.4);
  }

  li{
    margin-top:6px;
  }
}

</style>
<style>
.BMap_scaleTxt {
  color: white !important;
}

</style>