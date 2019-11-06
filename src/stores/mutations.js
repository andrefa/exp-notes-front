import { SET_AUTH_TOKEN, TOGGLE_LOADING } from './mutation-types'

const mutations = {
  [SET_AUTH_TOKEN](_, payload) {
    localStorage.setItem('AUTH_TOKEN', payload.authToken)
  },
  [TOGGLE_LOADING](state, payload) {
    state.loading = payload.loading
  }
}

export default mutations
