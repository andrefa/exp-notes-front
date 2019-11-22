import * as actionTypes from '@/shared/store/action-types'
import * as mutationTypes from '@/shared/store/mutation-types'

import httpClientFactory from '@/shared/services/http/http-client'

const EXPENSE_FIELDS = 'id description price date category { id name } source { id name } place { id name } currency { id symbol }'

const fetchExpenses = async ({ commit, state }, { tripId }) => {
  commit(mutationTypes.TOGGLE_LOADING, { loading: true })

  const query = `{ expenses(trip_id: ${tripId}) { ${EXPENSE_FIELDS} }}`
  const { expenses } = await httpClientFactory(state).fetchGraphql(query)
  commit(mutationTypes.SET_EXPENSES, { expenses })

  commit(mutationTypes.TOGGLE_LOADING)
}

const saveExpense = async ({ commit, state }, { expense, tripId }) => {
  commit(mutationTypes.TOGGLE_LOADING, { loading: true })

  const {
    description: desc,
    price,
    date,
    category: { id: catId },
    source: { id: srcId },
    place: { id: plcId },
    currency: { id: curId }
  } = expense

  const fields = `
    trip_id: ${tripId}
    description: "${desc}"
    price: ${price}
    date: "${date}"
    category_id: ${catId}
    source_id: ${srcId}
    place_id: ${plcId}
    currency_id: ${curId}
  `

  const query = `mutation { addExpense(${fields}){${EXPENSE_FIELDS}}}`
  await httpClientFactory(state).fetchGraphql(query)

  commit(mutationTypes.TOGGLE_LOADING)
}

const actions = {
  [actionTypes.FETCH_EXPENSES]: fetchExpenses,
  [actionTypes.SAVE_EXPENSE]: saveExpense
}

export default actions
