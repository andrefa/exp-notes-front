import * as actionTypes from './action-types'
import * as mutationTypes from './mutation-types'

const apiUrl = process.env.VUE_APP_API_URL

const fetchGraphql = async (authorization, query) => {
  const response = await fetch(`${apiUrl}/graphql`, {
    headers: { authorization, 'content-type': 'application/json' },
    body: JSON.stringify({ query }),
    method: 'POST',
    mode: 'cors'
  })

  const json = await response.json()
  return json.data
}

const actions = {
  async [actionTypes.FETCH_TASKS]({ commit, state }, { tripId }) {
    commit(mutationTypes.TOGGLE_LOADING, { loading: true })

    const query = `{ tasks(trip_id: ${tripId}) { id description complete }}`

    const { tasks } = await fetchGraphql(state.authToken, query)
    commit(mutationTypes.SET_TASKS, { tasks })

    commit(mutationTypes.TOGGLE_LOADING)
  },
  async [actionTypes.FETCH_TRIPS]({ commit, state }) {
    commit(mutationTypes.TOGGLE_LOADING, { loading: true })

    const query = '{ trips { id name start_date end_date }}'

    try {
      const { trips } = await fetchGraphql(state.authToken, query)
      commit(mutationTypes.SET_TRIPS, { trips })
    } catch (error) {
      commit(mutationTypes.CLEAR)
    }

    commit(mutationTypes.TOGGLE_LOADING)
  },
  [actionTypes.LOGIN]({ commit }, { authToken }) {
    commit(mutationTypes.SET_AUTH_TOKEN, { authToken })
  },
  [actionTypes.LOGOUT]({ commit }) {
    commit(mutationTypes.CLEAR)
  },
  async [actionTypes.TOGGLE_TASK]({ commit, state }, { taskId, complete }) {
    commit(mutationTypes.TOGGLE_LOADING, { loading: true })

    const query = `mutation { toggleTask(id: ${taskId} complete: ${complete}){ id }}`

    await fetchGraphql(state.authToken, query)
    commit(mutationTypes.TOGGLE_TASK, { taskId, complete })

    commit(mutationTypes.TOGGLE_LOADING)
  }
}

export default actions
