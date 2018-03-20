export default {
  name: '50',
  title: '业务营运',
  children: [{
      name: '5001',
      title: '路政',
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
      width:2,
      children: [
        {
          name:'500201',
          component: () =>
          import ('../../components/pages/Operate/Curing/Index1.vue'),
          title: '养护1'
        },
        {
          name:'500202',
          component: () =>
          import ('../../components/pages/Operate/Curing/Index2.vue'),
          title: '养护2'
        },
        {
          name:'500203',
          component: () =>
          import ('../../components/pages/Operate/Curing/Index3.vue'),
          title: '养护3'
        }
      ]
    },
    {
      name: '5003',
      title: '营运收费',
      width:2,
      children: [
        {
          name:'500301',
          component: () =>
          import ('../../components/pages/Operate/Charge/Index1.vue'),
          title: '营运收费1'
        },
        {
          name:'500302',
          component: () =>
          import ('../../components/pages/Operate/Charge/Index2.vue'),
          title: '营运收费2'
        },
        {
          name:'500303',
          component: () =>
          import ('../../components/pages/Operate/Charge/Index3.vue'),
          title: '营运收费3'
        },
        {
          name:'500304',
          component: () =>
          import ('../../components/pages/Operate/Charge/Index4.vue'),
          title: '营运收费4'
        }
      ]
    },
    {
      name: '5004',
      title: '服务区',
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