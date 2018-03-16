export default {
  name: 'ZC',
  title: '资产系统',
  children: [{
      name: 'ZC1',
      component: () =>
        import ('../../components/pages/ZC/ZCP1.vue'),
      title: '资产系统BI1',
    },
    {
      name: 'ZC2',
      component: () =>
        import ('../../components/pages/ZC/ZCP2.vue'),
      title: '资产系统BI2',
    },
    {
      name: 'ZC3',
      component: () =>
        import ('../../components/pages/ZC/ZCP3.vue'),
      title: '资产系统BI3',
    },
    {
      name: 'ZC4',
      component: () =>
        import ('../../components/pages/ZC/ZCP4.vue'),
      title: '资产系统BI4',
    }
  ]
}