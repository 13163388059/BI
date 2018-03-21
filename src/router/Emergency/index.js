export default {
  name: '70',
  title: '应急调度',
  children: [{
      name: '7001',
      title: 'GIS',
      color:"rgb(0,135,255)",
      icon:'icon-gis',
      width:2,
      children: [
        {
          name:'700101',
          component: () =>
          import ('../../components/pages/home/Home.vue'),
          title: 'GIS'
        }
      ]
    },
    {
      name: '7002',
      title: '应急调度',
      color:"rgb(0,135,255)",
      icon:'icon-yingjidiaodu',
      width:2,
      children: [
        {
          name:'700201',
          component: () =>
          import ('../../components/pages/Emergency/Dispatch/Index1.vue'),
          title: '年度事件汇总分析'
        },
        {
          name:'700202',
          component: () =>
          import ('../../components/pages/Emergency/Dispatch/Index2.vue'),
          title: '应急中心客服数据统计'
        }
      ]
    },
    {
      name: '7003',
      title: '移动单兵',
      color:"rgb(0,135,255)",
      icon:'icon-yidongdanbing',
      width:2,
      children: [
        {
          name:'700301',
          component: () =>
          import ('../../components/pages/Emergency/Mobile/Index.vue'),
          title: '移动单兵'
        }
      ]
    },
    {
      name: '7004',
      title: '应急预案',
      color:"rgb(0,135,255)",
      icon:'icon-yingjiyuan',
      children: [
        {
          name:'700401',
          component: () =>
          import ('../../components/pages/Emergency/Plan/Index.vue'),
          title: '应急预案'
        }
      ]
    },
    {
      name: '7005',
      title: '事件处置',
      color:"rgb(0,135,255)",
      icon:'icon-shijianchuzhi',
      children: [
        {
          name:'700501',
          component: () =>
          import ('../../components/pages/Emergency/Handle/Index.vue'),
          title: '事件处置进度与效率'
        }
      ]
    }
  ]
}