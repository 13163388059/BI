export default {
  name: '40',
  title: '资产管控',
  children: [{
      name: '4001',
      title: '办公资产',
      color:"rgb(0,135,255)",
      icon:'icon-bangongzichan',
      width:2,
      children: [
        {
          name:'400101',
          component: () =>
          import ('../../components/pages/Assets/OfficeAssets/Index1.vue'),
          title: '每年资产变动与存量'
        },
        {
          name:'400102',
          component: () =>
          import ('../../components/pages/Assets/OfficeAssets/Index2.vue'),
          title: '资产入库与报废统计'
        },
        {
          name:'400103',
          component: () =>
          import ('../../components/pages/Assets/OfficeAssets/Index3.vue'),
          title: '资产年度月份更新情况'
        },
        {
          name:'400104',
          component: () =>
          import ('../../components/pages/Assets/OfficeAssets/Index4.vue'),
          title: '资产处置与租出汇总'
        }
      ]
    },
    {
      name: '4002',
      title: '机电设备',
      color:"rgb(0,135,255)",
      icon:'icon-jidianshebei',
      width:2,
      children: [
        {
          name:'400201',
          component: () =>
          import ('../../components/pages/Assets/Equipment/Index1.vue'),
          title: '机电故障数据汇总'
        },
        {
          name:'400202',
          component: () =>
          import ('../../components/pages/Assets/Equipment/Index2.vue'),
          title: '代维公司效率统计'
        }
      ]
    },
    {
      name: '4003',
      title: '路产设施',
      color:"rgb(0,135,255)",
      icon:'icon-luchan',
      width:2,
      children: [
        {
          name:'400301',
          component: () =>
          import ('../../components/pages/Assets/RoadProperty/Index.vue'),
          title: '路产设施'
        }
      ]
    },
    {
      name: '4004',
      title: '房屋附属设施',
      color:"rgb(0,135,255)",
      icon:'icon-fangwufushusheshi',
      children: [
        {
          name:'400401',
          component: () =>
          import ('../../components/pages/Assets/House/Index.vue'),
          title: '附属设施项目管理汇总'
        }
      ]
    },
    {
      name: '4005',
      title: '公务用车',
      color:"rgb(0,135,255)",
      icon:'icon-gongwuyongche',
      children: [
        {
          name:'400501',
          component: () =>
          import ('../../components/pages/Assets/Vehicle/Index1.vue'),
          title: '在编车辆成本分析'
        },
        {
          name:'400502',
          component: () =>
          import ('../../components/pages/Assets/Vehicle/Index2.vue'),
          title: '车辆年度日常费用汇总'
        },
        {
          name:'400503',
          component: () =>
          import ('../../components/pages/Assets/Vehicle/Index3.vue'),
          title: '车辆年度维修违章费用汇总'
        }
      ]
    },
    {
      name: '4006',
      title: '生活资料',
      color:"rgb(0,135,255)",
      icon:'icon-shenghuoziliao',
      children: [
        {
          name:'400601',
          component: () =>
          import ('../../components/pages/Assets/Life/Index.vue'),
          title: '服装发放数据汇总'
        }
      ]
    },
    {
      name: '4007',
      title: '低值易耗',
      color:"rgb(0,135,255)",
      icon:'icon-dizhiyihaopin',
      children: [
        {
          name:'400701',
          component: () =>
          import ('../../components/pages/Assets/LowEasy/Index.vue'),
          title: '易耗品消耗数据分析'
        }
      ]
    }
  ]
}