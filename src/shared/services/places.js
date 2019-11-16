import { FETCH_PLACES } from '@/shared/store/action-types'
import { SET_PLACES, TOGGLE_LOADING } from '@/shared/store/mutation-types'

import httpClientFactory from '@/shared/services/http/http-client'

async function fetchPlaces({ commit, state }) {
  commit(TOGGLE_LOADING, { loading: true })

  const query = '{ places { id name }}'
  const { places } = await httpClientFactory(state).fetchGraphql(query)
  commit(SET_PLACES, { places })

  commit(TOGGLE_LOADING)
}

const actions = {
  [FETCH_PLACES]: fetchPlaces
}

export default actions
