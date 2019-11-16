import * as actionTypes from '@/shared/store/action-types'
import * as mutationTypes from '@/shared/store/mutation-types'

import httpClientFactory from '@/shared/services/http/http-client'


const fetchCurrencies = async ({ commit, state }) => {
  commit(mutationTypes.TOGGLE_LOADING, { loading: true })

  const query = '{ currencies { id name symbol }}'
  const { currencies } = await httpClientFactory(state).fetchGraphql(query)
  commit(mutationTypes.SET_CURRENCIES, { currencies })

  commit(mutationTypes.TOGGLE_LOADING)
}

const actions = {
  [actionTypes.FETCH_CURRENCIES]: fetchCurrencies
}

export default actions
