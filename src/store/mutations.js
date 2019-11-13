import Vue from 'vue'
import defaultState from './state'
import * as mutationTypes from './mutation-types'

const mutations = {
  [mutationTypes.CLEAR](state) {
    Object.assign(state, defaultState)
  },
  [mutationTypes.SET_AUTH_TOKEN](state, { authToken } = {}) {
    Vue.set(state, 'authToken', authToken)
  },
  [mutationTypes.SET_TRIPS](state, { trips } = {}) {
    Vue.set(state, 'trips', trips)
  },
  [mutationTypes.TOGGLE_LOADING](state, { loading } = {}) {
    Vue.set(state, 'loading', loading)
  }
}

export default mutations
