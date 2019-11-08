import Vue from 'vue'
import { SET_AUTH_TOKEN, TOGGLE_LOADING } from './mutation-types'

const mutations = {
  [SET_AUTH_TOKEN](state, { authToken } = {}) {
    Vue.set(state, 'authToken', authToken)
  },
  [TOGGLE_LOADING](state, { loading } = {}) {
    Vue.set(state, 'loading', loading)
  }
}

export default mutations
