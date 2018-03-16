export default {
  name: 'OA',
  title: '办公系统',
  children: [{
      name: 'OA1',
      component: () =>
        import ('../../components/pages/OA/OAP1.vue'),
      title: '办公系统BI1',
    },
    {
      name: 'OA2',
      component: () =>
        import ('../../components/pages/OA/OAP2.vue'),
      title: '办公系统BI2',
    }
    ,
    {
      name: 'OA3',
      component: () =>
        import ('../../components/pages/OA/OAP3.vue'),
      title: '办公系统BI3',
    }
    ,
    {
      name: 'OA4',
      component: () =>
        import ('../../components/pages/OA/OAP4.vue'),
      title: '办公系统BI4',
    }
  ]
}