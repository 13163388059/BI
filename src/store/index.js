import Vue from 'vue'
import Vuex from 'vuex'

import charts from './charts'

Vue.use(Vuex)

export default new Vuex.Store({
  //strict: process.env.NODE_ENV !== 'production',
  modules: {
    charts: charts
  }
})