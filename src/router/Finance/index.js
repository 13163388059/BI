export default {
  name: '30',
  title: '财报预算',
  children: [{
      name: '3001',
      title: '项目库',
      width:2,
      color:"rgb(0,135,255)",
      icon:'icon-xiangmuku',
      children: [
        {
          name:'300101',
          component: () =>
          import ('../../components/pages/Finance/Project/Index.vue'),
          title: '项目库年度数据汇总'
        }
      ]
    },
    {
      name: '3002',
      title: '财政预算',
      width:2,
      color:"rgb(0,135,255)",
      icon:'icon-caizhengyusuan',
      children: [
        {
          name:'300201',
          component: () =>
          import ('../../components/pages/Finance/Budget/Index.vue'),
          title: '各部门年度预算分析'
        }
      ]
    },
    {
      name: '3003',
      title: '财务报账',
      color:"rgb(0,135,255)",
      icon:'icon-caiwubaozhang',
      width:2,
      children: [
        {
          name:'300301',
          component: () =>
          import ('../../components/pages/Finance/Account/Index1.vue'),
          title: '年度预算支出统计'
        },
        {
          name:'300302',
          component: () =>
          import ('../../components/pages/Finance/Account/Index2.vue'),
          title: '部门预算与合同预警情况'
        }
      ]
    },
    {
      name: '3004',
      title: '合同支付',
      color:"rgb(0,135,255)",
      icon:'icon-hetongzhifu',
      width:2,
      children: [
        {
          name:'300401',
          component: () =>
          import ('../../components/pages/Finance/Payment/Index.vue'),
          title: '部门年度支付情况'
        }
      ]
    }
  ]
}