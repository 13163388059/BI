<template>
  <div class="aside">
      <el-tree
        :data="data"
        :props="defaultProps"
        accordion
        @node-click="handleNodeClick"
        :render-content="renderContent">
      </el-tree>
  </div>
</template>

<script>

import main from '../../router/main'
import typer from '../../router/typer'



console.log(typer.toNavNode(main))

export default {
  name:'bi-aside',
  data() {
    return {
      data: [typer.toNavNode(main)],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  },
  methods: {
    handleNodeClick(data,node) {
      if(data.able)
      this.$router.push(data.path)
    },
    renderContent(h, { node, data, store }){
      if(node.data.icon)
        return (<span style="font-size:14px"><i style='margin:0 12px 0 6px;font-size:18px;transform:translate(0,2px);' class={node.data.icon}></i>{node.data.label}</span>)
      else
        return (<span style="font-size:14px">{node.data.label}</span>)
    }
  }
};
</script>

<style>

.aside .el-tree{
  background-color: rgba(0,0,0,0)
}

.aside .el-tree > .el-tree-node > .el-tree-node__content{
  height: 48px;
  line-height: 48px;
}

.aside .el-tree .el-tree-node__content{
  height: 36px;
  line-height: 36px;
}

.aside .el-tree-node__content{
  background-color: rgba(0,0,0,0)!important;
}

.aside .el-tree > .el-tree-node.is-current > .el-tree-node__content::before,
.aside .el-tree > .el-tree-node.is-expanded > .el-tree-node__content::before{
  content: '';
  display: inline-block;
  height: 100%;
  width: 2px;
  background-color: aqua;
}

.aside .el-tree > .el-tree-node.is-current > .el-tree-node__content,
.aside .el-tree > .el-tree-node.is-expanded > .el-tree-node__content{
  background-color: rgba(255,255,255,0.1)!important;
}

.aside .el-tree > .el-tree-node> .el-tree-node__content::before{
  content: '';
  display: inline-block;
  height: 0;
  width: 2px;
  background-color: aqua;
  transition: all 0.3s ease-out;
}

.aside .el-tree-node__content{
  color: rgba(255, 255, 255, 0.6);
}
</style>
