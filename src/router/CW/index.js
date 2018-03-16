export default {
  name: 'CW',
  title: '财务系统',
  children: [{
      name: 'CW1',
      component: () =>
        import ('../../components/pages/CW/CWP1.vue'),
      title: '财务系统BI1',
    },
    {
      name: 'CW2',
      component: () =>
        import ('../../components/pages/CW/CWP2.vue'),
      title: '财务系统BI2',
    }
  ]
}