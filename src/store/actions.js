import { LOGIN, LOGOUT } from './action-types'
import { SET_AUTH_TOKEN } from './mutation-types'

const actions = {
  [LOGIN]({ commit }, { authToken }) {
    commit(SET_AUTH_TOKEN, { authToken })
  },
  [LOGOUT]({ commit }) {
    commit(SET_AUTH_TOKEN)
  }
}

export default actions
