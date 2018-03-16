import Vue from 'vue'
import Router from 'vue-router'

import Main from './main'
import typer from './typer'


Vue.use(Router)
export default new Router({
  routes: typer.toRouterNode(Main)
})