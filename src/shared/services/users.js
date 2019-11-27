import { LOGIN, LOGOUT } from '@/shared/store/action-types'
import { CLEAR, SET_AUTH_TOKEN, TOGGLE_LOADING } from '@/shared/store/mutation-types'

import httpClientFactory from '@/shared/services/http/http-client'

async function login({ state, commit }, { email, password }) {
  commit(TOGGLE_LOADING, { loading: true })

  try {
    const body = { email, password }
    const { authToken } = await httpClientFactory(state).post({ url: 'login', body })
    commit(SET_AUTH_TOKEN, { authToken })
  } finally {
    commit(TOGGLE_LOADING)
  }
}

function logout({ commit }) {
  commit(CLEAR)
}

const actions = {
  [LOGIN]: login,
  [LOGOUT]: logout
}

export default actions
