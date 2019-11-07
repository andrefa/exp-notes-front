import { SET_AUTH_TOKEN } from './mutation-types'

const actions = {
  login({ commit }, { authToken }) {
    commit(SET_AUTH_TOKEN, { authToken })
  },
  logout({ commit }) {
    commit(SET_AUTH_TOKEN)
  }
}

export default actions
