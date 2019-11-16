import { LOGIN, LOGOUT } from '@/shared/store/action-types'
import { CLEAR, SET_AUTH_TOKEN } from '@/shared/store/mutation-types'

function login({ commit }, { authToken }) {
  commit(SET_AUTH_TOKEN, { authToken })
}

function logout({ commit }) {
  commit(CLEAR)
}

const actions = {
  [LOGIN]: login,
  [LOGOUT]: logout
}

export default actions
