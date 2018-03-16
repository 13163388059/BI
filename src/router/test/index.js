export default {
  name: 'test',
  component: () =>
    import ('../../components/pages/Test.vue'),
  title: '测试',
  children: [{
      name: 'home',
      component: () =>
        import ('../../components/pages/Home.vue'),
      title: '主页',
    },
    {
      name: 'test',
      component: () =>
        import ('../../components/pages/Test.vue'),
      title: '测试',
    }
  ]
}