import Vue from 'vue'
import Vuex from 'vuex'

import charts from './charts'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  //strict: process.env.NODE_ENV !== 'production',
  modules: {
    charts,
    router
  }
})