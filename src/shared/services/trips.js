import { FETCH_TRIPS } from '@/shared/store/action-types'
import { SET_TRIPS, TOGGLE_LOADING } from '@/shared/store/mutation-types'

import httpClientFactory from '@/shared/services/http/http-client'

async function fetchTrips({ commit, state }) {
  commit(TOGGLE_LOADING, { loading: true })

  const query = '{ trips { id name start_date end_date remaining_days remaning_amount_per_day }}'
  const { trips } = await httpClientFactory(state).fetchGraphql(query)
  commit(SET_TRIPS, { trips })

  commit(TOGGLE_LOADING)
}

const actions = {
  [FETCH_TRIPS]: fetchTrips
}

export default actions
