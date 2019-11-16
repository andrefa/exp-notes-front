import * as actionTypes from '@/shared/store/action-types'
import * as mutationTypes from '@/shared/store/mutation-types'

import httpClientFactory from '@/shared/services/http/http-client'


const fetchCategories = async ({ commit, state }) => {
  commit(mutationTypes.TOGGLE_LOADING, { loading: true })

  const query = '{ categories { id name parent_category_id }}'
  const { categories } = await httpClientFactory(state).fetchGraphql(query)
  commit(mutationTypes.SET_CATEGORIES, { categories })

  commit(mutationTypes.TOGGLE_LOADING)
}

const actions = {
  [actionTypes.FETCH_CATEGORIES]: fetchCategories
}

export default actions
