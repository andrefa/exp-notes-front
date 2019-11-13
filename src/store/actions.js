import * as actionTypes from './action-types'
import * as mutationTypes from './mutation-types'

const apiUrl = process.env.VUE_APP_API_URL

const fetchGraphql = async (authorization, query) => {
  const response = await fetch(`${apiUrl}/graphql`, {
    // credentials: 'include',
    headers: { authorization, 'content-type': 'application/json' },
    body: `{"operationName":null,"variables":{},"query":" ${query} "}`,
    method: 'POST',
    mode: 'cors'
  })

  const json = await response.json()
  return json.data
}

const actions = {
  async [actionTypes.FETCH_TRIPS]({ commit, state }) {
    commit(mutationTypes.TOGGLE_LOADING, { loading: true })

    const query = '{ trips { id name }}'

    const { trips } = await fetchGraphql(state.authToken, query)
    commit(mutationTypes.SET_TRIPS, { trips })

    commit(mutationTypes.TOGGLE_LOADING)
  },
  [actionTypes.LOGIN]({ commit }, { authToken }) {
    commit(mutationTypes.SET_AUTH_TOKEN, { authToken })
  },
  [actionTypes.LOGOUT]({ commit }) {
    commit(mutationTypes.CLEAR)
  }
}

export default actions
