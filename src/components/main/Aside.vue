<template>
  <div class="aside">
      <el-tree
        :data="computed_data"
        :props="defaultProps"
        accordion
        node-key="path"
        @node-click="handleNodeClick"
        show-checkbox
        :render-content="renderContent"
        ref="tree">
      </el-tree>
  </div>
</template>

<script>

import main from '../../router/main'
import typer from '../../router/typer'

const menu = typer.toNavNode(main)

export default {
  name: 'bi-aside',
  data() {
    return {
      data: [{
        label: menu.label,
        path: '/',
        able: true,
        children: []
      },
      ...menu.children
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  },
  computed: {
    computed_data() {
      this.$router.push(this.$store.state.router.choose.children[0].path)
      setTimeout(() => {
        this.$refs.tree.setCheckedKeys([this.$store.state.router.choose.children[0].path])
      }, 0);
      return this.$store.state.router.choose.children.map(element => {
        element.icon = null
        return element
      });
    }
  },
  methods: {
    handleNodeClick(data, node) {
      this.$refs.tree.setCheckedNodes([]);
      this.$refs.tree.setCheckedNodes([data]);
      if (data.able)
        this.$router.push(data.path)
    },
    renderContent(h, { node, data, store }) {
      if (node.data.icon)
        return (<span style="font-size:14px"><i style='margin:0 12px 0 6px;font-size:18px;transform:translate(0,2px);' class={node.data.icon}></i>{node.data.label}</span>)
      else
        return (<span style="font-size:14px">{node.data.label}</span>)
    }
  },
  mounted() {
  }
};
</script>

<style>
.aside .el-tree {
    background-color: rgba(0, 0, 0, 0);
}

.aside .el-tree > .el-tree-node > .el-tree-node__content {
    height: 48px;
    line-height: 48px;
}

.aside .el-tree .el-tree-node__content {
    height: 36px;
    line-height: 36px;
}

.aside .el-tree-node__content {
    background-color: rgba(0, 0, 0, 0) !important;
}

.aside .el-tree > .el-tree-node.is-current > .el-tree-node__content::before,
.aside .el-tree > .el-tree-node.is-expanded > .el-tree-node__content::before,
.aside .el-tree > .el-tree-node.is-checked > .el-tree-node__content::before {
    content: '';
    display: inline-block;
    height: 100%!important;
    width: 2px;
    background-color: aqua;
}
.aside .el-tree > .el-tree-node.is-expanded > .el-tree-node__content {
    background-color: rgb(37,45,56) !important;
}

.aside .el-tree .el-tree-node.is-checked > .el-tree-node__content {
    background-color:rgb(37,45,56) !important;
}

.aside .el-tree .el-tree-node.is-current > .el-tree-node__content,
.aside .el-tree .el-tree-node.is-checked > .el-tree-node__content {
    font-weight: 700;
    color: azure;
}



.aside .el-tree > .el-tree-node > .el-tree-node__content::before {
    content: '';
    display: inline-block;
    height: 0;
    width: 2px;
    background-color: aqua;
    transition: all 0.3s ease-out;
}

.aside .el-tree-node__content {
    color: rgba(255, 255, 255, 0.6);
}

.aside label{
  display: none!important;
}
</style>
