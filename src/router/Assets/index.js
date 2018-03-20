export default {
  name: '40',
  title: '资产管控',
  children: [{
      name: '4001',
      title: '办公资产',
      children: [
        {
          name:'400101',
          component: () =>
          import ('../../components/pages/Assets/OfficeAssets/Index1.vue'),
          title: '办公资产1'
        },
        {
          name:'400102',
          component: () =>
          import ('../../components/pages/Assets/OfficeAssets/Index2.vue'),
          title: '办公资产2'
        },
        {
          name:'400103',
          component: () =>
          import ('../../components/pages/Assets/OfficeAssets/Index3.vue'),
          title: '办公资产3'
        },
        {
          name:'400104',
          component: () =>
          import ('../../components/pages/Assets/OfficeAssets/Index4.vue'),
          title: '办公资产4'
        }
      ]
    },
    {
      name: '4002',
      title: '机电设备',
      children: [
        {
          name:'400201',
          component: () =>
          import ('../../components/pages/Assets/Equipment/Index1.vue'),
          title: '机电设备1'
        },
        {
          name:'400202',
          component: () =>
          import ('../../components/pages/Assets/Equipment/Index2.vue'),
          title: '机电设备2'
        }
      ]
    },
    {
      name: '4003',
      title: '路产设施',
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
      children: [
        {
          name:'400401',
          component: () =>
          import ('../../components/pages/Assets/House/Index.vue'),
          title: '房屋附属设施'
        }
      ]
    },
    {
      name: '4005',
      title: '公务用车',
      children: [
        {
          name:'400501',
          component: () =>
          import ('../../components/pages/Assets/Vehicle/Index1.vue'),
          title: '公务用车1'
        },
        {
          name:'400502',
          component: () =>
          import ('../../components/pages/Assets/Vehicle/Index2.vue'),
          title: '公务用车2'
        },
        {
          name:'400503',
          component: () =>
          import ('../../components/pages/Assets/Vehicle/Index3.vue'),
          title: '公务用车3'
        }
      ]
    },
    {
      name: '4006',
      title: '生活资料',
      children: [
        {
          name:'400601',
          component: () =>
          import ('../../components/pages/Assets/Life/Index.vue'),
          title: '生活资料'
        }
      ]
    },
    {
      name: '4007',
      title: '低值易耗',
      children: [
        {
          name:'400701',
          component: () =>
          import ('../../components/pages/Assets/LowEasy/Index.vue'),
          title: '低值易耗'
        }
      ]
    }
  ]
}