export default {
  name: '30',
  title: '财报预算',
  children: [{
      name: '3001',
      title: '项目库',
      width:2,
      children: [
        {
          name:'300101',
          component: () =>
          import ('../../components/pages/Finance/Project/Index.vue'),
          title: '项目库'
        }
      ]
    },
    {
      name: '3002',
      title: '财政预算',
      width:2,
      children: [
        {
          name:'300201',
          component: () =>
          import ('../../components/pages/Finance/Budget/Index.vue'),
          title: '财政预算'
        }
      ]
    },
    {
      name: '3003',
      title: '财务报账',
      width:2,
      children: [
        {
          name:'300301',
          component: () =>
          import ('../../components/pages/Finance/Account/Index1.vue'),
          title: '财务报账1'
        },
        {
          name:'300302',
          component: () =>
          import ('../../components/pages/Finance/Account/Index2.vue'),
          title: '财务报账2'
        }
      ]
    },
    {
      name: '3004',
      title: '合同支付',
      width:2,
      children: [
        {
          name:'300401',
          component: () =>
          import ('../../components/pages/Finance/Payment/Index.vue'),
          title: '合同支付'
        }
      ]
    }
  ]
}