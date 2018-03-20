export default {
  name: '10',
  title: '我的桌面',
  width:2,
  children: [{
      name: '1001',
      title: '首页',
      width:2,
      children: [
        {
          name:'100101',
          component: () =>
          import ('../../components/pages/Desktop/Home/Index.vue'),
          title: '首页'
        }
      ]
    },
    {
      name: '1002',
      title: '人员异动',
      children: [
        {
          name:'100201',
          component: () =>
          import ('../../components/pages/Desktop/Person/Index.vue'),
          title: '人员异动'
        }
      ]
    },
    {
      name: '1003',
      title: '项目一号查询',
      children: [
        {
          name:'100301',
          component: () =>
          import ('../../components/pages/Desktop/Project/Index.vue'),
          title: '项目一号查询'
        }
      ]
    },
    {
      name: '1004',
      title: '预算分解结构',
      children: [
        {
          name:'100401',
          component: () =>
          import ('../../components/pages/Desktop/Budget/Index.vue'),
          title: '预算分解结构'
        }
      ]
    },
    {
      name: '1005',
      title: '资产生命周期',
      children: [
        {
          name:'100501',
          component: () =>
          import ('../../components/pages/Desktop/Assets/Index.vue'),
          title: '资产生命周期'
        }
      ]
    },
    {
      name: '1006',
      title: '应急事件跟踪',
      children: [
        {
          name:'100601',
          component: () =>
          import ('../../components/pages/Desktop/Event/Index.vue'),
          title: '应急事件跟踪'
        }
      ]
    },
    {
      name: '1007',
      title: '应急预案',
      children: [
        {
          name:'100701',
          component: () =>
          import ('../../components/pages/Desktop/Plan/Index.vue'),
          title: '应急预案'
        }
      ]
    },
    {
      name: '1008',
      title: '安全事故跟踪',
      children: [
        {
          name:'100801',
          component: () =>
          import ('../../components/pages/Desktop/Accident/Index.vue'),
          title: '安全事故跟踪'
        }
      ]
    },
    {
      name: '1009',
      title: '隐患排查',
      children: [
        {
          name:'100901',
          component: () =>
          import ('../../components/pages/Desktop/Danger/Index.vue'),
          title: '隐患排查'
        }
      ]
    }
  ]
}