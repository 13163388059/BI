export default {
  name: '20',
  title: '人政办公',
  children: [{
      name: '2001',
      title: '人力资源',
      width:2,
      children: [
        {
          name:'200101',
          component: () =>
          import ('../../components/pages/Office/Manpower/Index.vue'),
          title: '人力资源'
        }
      ]
    },
    {
      name: '2002',
      title: '政工',
      width:2,
      children: [
        {
          name:'200201',
          component: () =>
          import ('../../components/pages/Office/Political/Index.vue'),
          title: '政工'
        }
      ]
    },
    {
      name: '2003',
      title: '综合办公',
      width:2,
      children: [
        {
          name:'200301',
          component: () =>
          import ('../../components/pages/Office/Integrated/Index1.vue'),
          title: '管理处数据分析'
        },
        {
          name:'200302',
          component: () =>
          import ('../../components/pages/Office/Integrated/Index2.vue'),
          title: '基层单位数据分析'
        }
      ]
    }
  ]
}