
import main from '../router/main'
import typer from '../router/typer'

const menu = typer.toMenuNode(main)

export default {
  namespaced: true,
  state: {
    all: menu.children,
    choose:menu.children[0].children[0]
  },
  mutations: {
    choose(state,{row,col}) {
      console.log(state.all[row])

      if(state.all[row] && state.all[row].children && state.all[row].children[col])
        state.choose = state.all[row].children[col]
    },
  }
}