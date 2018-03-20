export default {
  name: '70',
  title: '应急调度',
  children: [{
      name: '7001',
      title: 'GIS',
      width:2,
      children: [
        {
          name:'700101',
          component: () =>
          import ('../../components/pages/Emergency/GIS/Index.vue'),
          title: 'GIS'
        }
      ]
    },
    {
      name: '7002',
      title: '应急调度',
      width:2,
      children: [
        {
          name:'700201',
          component: () =>
          import ('../../components/pages/Emergency/Dispatch/Index1.vue'),
          title: '应急调度1'
        },
        {
          name:'700202',
          component: () =>
          import ('../../components/pages/Emergency/Dispatch/Index2.vue'),
          title: '应急调度2'
        }
      ]
    },
    {
      name: '7003',
      title: '移动单兵',
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
      children: [
        {
          name:'700501',
          component: () =>
          import ('../../components/pages/Emergency/Handle/Index.vue'),
          title: '事件处置'
        }
      ]
    }
  ]
}