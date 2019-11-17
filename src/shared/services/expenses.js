import * as actionTypes from '@/shared/store/action-types'
import * as mutationTypes from '@/shared/store/mutation-types'

import httpClientFactory from '@/shared/services/http/http-client'


const fetchExpenses = async ({ commit, state }, { tripId }) => {
  commit(mutationTypes.TOGGLE_LOADING, { loading: true })

  const query = `{ expenses(trip_id: ${tripId}) { id description price }}`
  const { expenses } = await httpClientFactory(state).fetchGraphql(query)
  commit(mutationTypes.SET_EXPENSES, { expenses })

  commit(mutationTypes.TOGGLE_LOADING)
}

const actions = {
  [actionTypes.FETCH_EXPENSES]: fetchExpenses
}

export default actions
