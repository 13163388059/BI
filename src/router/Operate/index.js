export default {
  name: '50',
  title: '业务营运',
  children: [{
      name: '5001',
      title: '路政',
      color:"rgb(0,135,255)",
      icon:'icon-luzheng',
      width:2,
      children: [
        {
          name:'500101',
          component: () =>
          import ('../../components/pages/Operate/Highways/Index.vue'),
          title: '路政'
        }
      ]
    },
    {
      name: '5002',
      title: '养护',
      color:"rgb(0,135,255)",
      icon:'icon-yanghu',
      width:2,
      children: [
        {
          name:'500201',
          component: () =>
          import ('../../components/pages/Operate/Curing/Index1.vue'),
          title: '路产设施维修与金额统计'
        },
        {
          name:'500202',
          component: () =>
          import ('../../components/pages/Operate/Curing/Index2.vue'),
          title: '路产设施维护计划与合同情况'
        },
        {
          name:'500203',
          component: () =>
          import ('../../components/pages/Operate/Curing/Index3.vue'),
          title: '养护巡查数据分析'
        }
      ]
    },
    {
      name: '5003',
      title: '营运收费',
      color:"rgb(0,135,255)",
      icon:'icon-yingyunshoufei',
      width:2,
      children: [
        {
          name:'500301',
          component: () =>
          import ('../../components/pages/Operate/Charge/Index1.vue'),
          title: '站所收入与客车免费车流量'
        },
        {
          name:'500302',
          component: () =>
          import ('../../components/pages/Operate/Charge/Index2.vue'),
          title: '站所出入口车流量情况'
        },
        {
          name:'500303',
          component: () =>
          import ('../../components/pages/Operate/Charge/Index3.vue'),
          title: '年度ETC/MTC收费汇总'
        },
        {
          name:'500304',
          component: () =>
          import ('../../components/pages/Operate/Charge/Index4.vue'),
          title: '站所出入口交费车流量'
        }
      ]
    },
    {
      name: '5004',
      title: '服务区',
      color:"rgb(0,135,255)",
      icon:'icon-fuwuqu',
      width:2,
      children: [
        {
          name:'500401',
          component: () =>
          import ('../../components/pages/Operate/ServiceArea/Index.vue'),
          title: '服务区'
        }
      ]
    }
  ]
}