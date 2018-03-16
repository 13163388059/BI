export default {
  name: 'YJ',
  title: '应急系统',
  children: [{
      name: 'YJ1',
      component: () =>
        import ('../../components/pages/YJ/YJP1.vue'),
      title: '应急系统BI1',
    },
    {
      name: 'YJ2',
      component: () =>
        import ('../../components/pages/YJ/YJP2.vue'),
      title: '应急系统BI2',
    }
  ]
}