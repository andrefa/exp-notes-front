import Vue from 'vue'
import defaultState from './state'
import * as mutationTypes from './mutation-types'

const mutations = {
  [mutationTypes.CLEAR](state) {
    Object.assign(state, defaultState)
  },
  [mutationTypes.CLEAR_TASK_FORM](state) {
    Object.assign(state, {
      ...state,
      taskForm: { ...defaultState.taskForm }
    })
  },
  [mutationTypes.DELETE_EXPENSE](state, { expenseId } = {}) {
    Object.assign(state, {
      ...state,
      expenses: state.expenses.filter(e => e.id !== expenseId)
    })
  },
  [mutationTypes.DELETE_TASK](state, { taskId } = {}) {
    Object.assign(state, {
      ...state,
      tasks: state.tasks.filter(t => t.id !== taskId)
    })
  },
  [mutationTypes.SAVE_TASK](state, { task } = {}) {
    const taskIdx = state.tasks.findIndex(t => t.id === task.id)
    let tasks = [...state.tasks]

    if (taskIdx !== -1) {
      tasks[taskIdx] = { ...task }
    } else {
      tasks = [...tasks, task]
    }

    Object.assign(state, {
      ...state,
      tasks,
      taskForm: { ...defaultState.taskForm }
    })
  },
  [mutationTypes.SET_AUTH_TOKEN](state, { authToken } = {}) {
    Vue.set(state, 'authToken', authToken)
  },
  [mutationTypes.SET_CATEGORIES](state, { categories } = {}) {
    Vue.set(state, 'categories', categories)
  },
  [mutationTypes.SET_CURRENCIES](state, { currencies } = {}) {
    Vue.set(state, 'currencies', currencies)
  },
  [mutationTypes.SET_EXPENSES](state, { expenses } = {}) {
    Vue.set(state, 'expenses', expenses)
  },
  [mutationTypes.SET_PLACES](state, { places } = {}) {
    Vue.set(state, 'places', places)
  },
  [mutationTypes.SET_REMAINING_AMOUNT_PER_SOURCE](state, { remainingAmountPerSource } = {}) {
    Vue.set(state, 'remainingAmountPerSource', remainingAmountPerSource)
  },
  [mutationTypes.SET_SPENT_PER_CATEGORY](state, { spentPerCategory } = {}) {
    Vue.set(state, 'spentPerCategory', spentPerCategory)
  },
  [mutationTypes.SET_SPENT_PER_DAY](state, { spentPerDayAndCategory } = {}) {
    Vue.set(state, 'spentPerDayAndCategory', spentPerDayAndCategory)
  },
  [mutationTypes.SET_SPENT_PER_SOURCE](state, { spentPerSource } = {}) {
    Vue.set(state, 'spentPerSource', spentPerSource)
  },
  [mutationTypes.SET_SOURCES](state, { sources } = {}) {
    Vue.set(state, 'sources', sources)
  },
  [mutationTypes.SET_TASKS](state, { tasks } = {}) {
    Vue.set(state, 'tasks', tasks)
  },
  [mutationTypes.SET_TASK_FORM](state, { task } = {}) {
    Object.assign(state, {
      ...state,
      taskForm: { ...task }
    })
  },
  [mutationTypes.SET_TRIPS](state, { trips } = {}) {
    Object.assign(state, {
      ...defaultState,
      authToken: state.authToken,
      trips
    })
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
