export default {
  name: 'YY',
  title: '营运系统',
  children: [{
      name: 'YY1',
      component: () =>
        import ('../../components/pages/YY/YYP1.vue'),
      title: '营运系统BI1',
    },
    {
      name: 'YY2',
      component: () =>
        import ('../../components/pages/YY/YYP2.vue'),
      title: '营运系统BI2',
    },
    {
      name: 'YY3',
      component: () =>
        import ('../../components/pages/YY/YYP3.vue'),
      title: '营运系统BI3',
    },
    {
      name: 'YY4',
      component: () =>
        import ('../../components/pages/YY/YYP4.vue'),
      title: '营运系统BI4',
    }
  ]
}