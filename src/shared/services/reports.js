import * as actionTypes from '@/shared/store/action-types'
import * as mutationTypes from '@/shared/store/mutation-types'

import httpClientFactory from '@/shared/services/http/http-client'

const reports = [
  {
    name: 'spentPerSource',
    fields: ['source', 'amount'],
    action: actionTypes.FETCH_SPENT_PER_SOURCE,
    mutation: mutationTypes.SET_SPENT_PER_SOURCE
  },
  {
    name: 'spentPerCategory',
    fields: ['category', 'amount'],
    action: actionTypes.FETCH_SPENT_PER_CATEGORY,
    mutation: mutationTypes.SET_SPENT_PER_CATEGORY
  },
  {
    name: 'spentPerDay',
    fields: ['day', 'amount'],
    action: actionTypes.FETCH_SPENT_PER_DAY,
    mutation: mutationTypes.SET_SPENT_PER_DAY
  },
  {
    name: 'remainingDays',
    fields: ['remaining_days'],
    action: actionTypes.FETCH_REMAINING_DAYS,
    mutation: mutationTypes.SET_REMAINING_DAYS
  },
  {
    name: 'remainingAmountPerSource',
    fields: ['source', 'amount', 'remaining_per_source'],
    action: actionTypes.FETCH_REMAINING_AMOUNT_PER_SOURCE,
    mutation: mutationTypes.SET_REMAINING_AMOUNT_PER_SOURCE
  },
  {
    name: 'remainingAmountPerDay',
    fields: ['remaining_per_day'],
    action: actionTypes.FETCH_REMAINING_AMOUNT_PER_DAY,
    mutation: mutationTypes.SET_REMAINING_AMOUNT_PER_DAY
  }
]

const actions = {}

reports.forEach((report) => {
  const { action } = report
  const func = async ({ commit, state }, { tripId }) => {
    commit(mutationTypes.TOGGLE_LOADING, { loading: true })

    const { name, fields, mutation } = report
    const query = `{ ${name}(trip_id: ${tripId}) {${fields.join(' ')}} }`
    const result = await httpClientFactory(state).fetchGraphql(query)
    commit(mutation, { [name]: result[name] })

    commit(mutationTypes.TOGGLE_LOADING)
  }

  actions[action] = func
})

export default actions
