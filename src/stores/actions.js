import { SET_AUTH_TOKEN, TOGGLE_LOADING } from './mutation-types'

const actions = {
  login({ commit }, { authToken }) {
    commit(TOGGLE_LOADING, { loading: true })
    setTimeout(() => {
      commit(SET_AUTH_TOKEN, { authToken })
      commit(TOGGLE_LOADING, { loading: false })
    }, 1000)
  }
}

export default actions
