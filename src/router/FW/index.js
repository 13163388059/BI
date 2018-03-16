export default {
  name: 'FW',
  title: '附属设施系统',
  children: [{
      name: 'FW1',
      component: () =>
        import ('../../components/pages/FW/FWP1.vue'),
      title: '附属设施系统BI1',
    },
    {
      name: 'FW2',
      component: () =>
        import ('../../components/pages/FW/FWP2.vue'),
      title: '附属设施系统BI2',
    },
    {
      name: 'FW3',
      component: () =>
        import ('../../components/pages/FW/FWP3.vue'),
      title: '附属设施系统BI3',
    }
  ]
}