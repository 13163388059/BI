export default {
  toNavNode,
  toRouterNode,
  toMenuNode
}


function toNavNode(node, path = []) {
  if (!node) return null

  const _path = path.map(i => i)

  _path.push(node.name)

  return {
    path: _path.join('/') === '' ? '/' : _path.join('/'),
    able: node.component || node.redirect ? true : false,
    label: node.title ? node.title : node.name,
    children: node.children ? node.children.map(i => toNavNode(i, _path)) : null
  }
}

function toMenuNode(node, path = []) {
  if (!node) return null

  const _path = path.map(i => i)

  _path.push(node.name)

  return {
    path: _path.join('/') === '' ? '/' : _path.join('/'),
    able: node.component || node.redirect ? true : false,
    label: node.title ? node.title : node.name,
    children: node.children ? node.children.map(i => toMenuNode(i, _path)) : null,

    //磁贴样式属性
    color:node.color?node.color:'red',
    width:node.width?node.width:1,
    height:node.height?node.height:1,
    icon:node.icon?node.icon:'el-icon-error',

  }
}

function toRouterNode(node, path = [], res = []) {
  if (!node) return null

  const _path = path.map(i => i)

  _path.push(node.name)

  res.push({
    path: _path.join('/') === '' ? '/' : _path.join('/'),
    component: node.component,
    redirect: node.redirect
  })

  if (node.children) node.children.forEach(i => toRouterNode(i, _path, res))

  return res
}