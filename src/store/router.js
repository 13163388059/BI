
import main from '../router/main'
import typer from '../router/typer'

const menu = typer.toMenuNode(main)

console.log(menu)

export default {
  namespaced: true,
  state: {
    all: menu.children,
    choose:[]
  },
  mutations: {
    clean(state) {
      state.all = []
    },
  }
}