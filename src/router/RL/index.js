export default {
  name: 'RL',
  title: '人力资源系统',
  children: [{
      name: 'RL1',
      component: () =>
        import ('../../components/pages/RL/RLP1.vue'),
      title: '人力资源系统BI1',
    }
  ]
}