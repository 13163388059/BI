
import main from '../router/main'
import typer from '../router/typer'

const menu = typer.toMenuNode(main)

console.log(menu)

export default {
  namespaced: true,
  state: {
    all: menu.children,
    choose:menu.children[0]
  },
  mutations: {
    choose(state,index) {
      if(state.all[index])
        state.choose = state.all[index]
    },
  }
}