import * as actionTypes from '@/shared/store/action-types'
import * as mutationTypes from '@/shared/store/mutation-types'

import httpClientFactory from '@/shared/services/http/http-client'


const fetchSources = async ({ commit, state }) => {
  commit(mutationTypes.TOGGLE_LOADING, { loading: true })

  const query = '{ sources { id name }}'
  const { sources } = await httpClientFactory(state).fetchGraphql(query)
  commit(mutationTypes.SET_SOURCES, { sources })

  commit(mutationTypes.TOGGLE_LOADING)
}

const actions = {
  [actionTypes.FETCH_SOURCES]: fetchSources
}

export default actions
