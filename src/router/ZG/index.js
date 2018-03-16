export default {
  name: 'ZG',
  title: '党政工团系统',
  children: [{
      name: 'ZG1',
      component: () =>
        import ('../../components/pages/ZG/ZGP1.vue'),
      title: '党政工团系统BI1',
    },
    {
      name: 'ZG2',
      component: () =>
        import ('../../components/pages/ZG/ZGP2.vue'),
      title: '党政工团系统BI2',
    }
    ,
    {
      name: 'ZG3',
      component: () =>
        import ('../../components/pages/ZG/ZGP3.vue'),
      title: '党政工团系统BI3',
    }
    ,
    {
      name: 'ZG4',
      component: () =>
        import ('../../components/pages/ZG/ZGP4.vue'),
      title: '党政工团系统BI4',
    }
  ]
}