import TestMod from './test/index'

export default {
  name: '',
  redirect: '/home',
  title: '主页',
  children: [
    TestMod,
    {
      name: 'home',
      title: '主页',
      component: () =>
        import ('../components/pages/CW/CWP1.vue')
    }
  ]
}