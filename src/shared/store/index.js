import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import plugins from './plugins'
import state from './state'

Vue.use(Vuex)

const createStore = new Vuex.Store({
  actions,
  getters,
  mutations,
  plugins,
  state
})

export default createStore
