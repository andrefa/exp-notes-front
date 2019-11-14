import Vue from 'vue'
import defaultState from './state'
import * as mutationTypes from './mutation-types'

const mutations = {
  [mutationTypes.CLEAR](state) {
    Object.assign(state, defaultState)
  },
  [mutationTypes.SET_AUTH_TOKEN](state, { authToken } = {}) {
    Vue.set(state, 'authToken', authToken)
  },
  [mutationTypes.SET_TASKS](state, { tasks } = {}) {
    Vue.set(state, 'tasks', tasks)
  },
  [mutationTypes.SET_TRIPS](state, { trips } = {}) {
    Vue.set(state, 'trips', trips)
    Vue.set(state, 'tasks', defaultState.tasks)
  },
  [mutationTypes.TOGGLE_LOADING](state, { loading } = {}) {
    Vue.set(state, 'loading', loading)
  },
  [mutationTypes.TOGGLE_TASK](state, { taskId, complete } = {}) {
    Object.assign(state, {
      ...state,
      tasks: state.tasks.map(t => (t.id === taskId ? { ...t, complete } : t))
    })
  }
}

export default mutations
