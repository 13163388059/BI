export default {
  name: 'YH',
  title: '路产系统',
  children: [{
      name: 'YH1',
      component: () =>
        import ('../../components/pages/YH/YHP1.vue'),
      title: '路产系统BI1',
    },
    {
      name: 'YH2',
      component: () =>
        import ('../../components/pages/YH/YHP2.vue'),
      title: '路产系统BI2',
    },
    {
      name: 'YH3',
      component: () =>
        import ('../../components/pages/YH/YHP3.vue'),
      title: '路产系统BI3',
    }
  ]
}