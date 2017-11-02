import menuComponentModule from './menuComponentModule'

export default (routers, data) => {
  generaMenu(routers, data)
}

function generaMenu (routers, data) {
  data.forEach((item) => {
    let menu = Object.assign({}, item)
    menu.component = menuComponentModule(menu.component)
    // 这里考虑到没有子节点，根节点处理点击跳转
    if (!item.leaf || (item.leaf && item.children.length === 1)) {
      menu.children = []
      generaMenu(menu.children, item.children)
    }
    routers.push(menu)
  })
}
