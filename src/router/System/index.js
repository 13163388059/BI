export default {
  name: '80',
  title: '系统设置',
  children: [{
      name: '8001',
      title: '系统设置',
      color:"rgb(0,135,255)",
      icon:'icon-xitongshezhi',
      width:2,
      children: [
        {
          name:'800101',
          component: () =>
          import ('../../components/pages/System/SetUp/Index.vue'),
          title: '系统设置'
        }
      ]
    }
  ]
}