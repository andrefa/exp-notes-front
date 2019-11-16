import * as actionTypes from '@/shared/store/action-types'
import * as mutationTypes from '@/shared/store/mutation-types'

import httpClientFactory from '@/shared/services/http/http-client'

const deleteTask = async ({ commit, state }, { taskId }) => {
  commit(mutationTypes.TOGGLE_LOADING, { loading: true })

  const query = `mutation { deleteTask(id: ${taskId}) }`
  await httpClientFactory(state).fetchGraphql(query)
  commit(mutationTypes.DELETE_TASK, { taskId })

  commit(mutationTypes.TOGGLE_LOADING)
}

const fetchTasks = async ({ commit, state }, { tripId }) => {
  commit(mutationTypes.TOGGLE_LOADING, { loading: true })

  const query = `{ tasks(trip_id: ${tripId}) { id description complete }}`
  const { tasks } = await httpClientFactory(state).fetchGraphql(query)
  commit(mutationTypes.SET_TASKS, { tasks })

  commit(mutationTypes.TOGGLE_LOADING)
}

const saveTask = async ({ commit, state }, { task }) => {
  commit(mutationTypes.TOGGLE_LOADING, { loading: true })

  if (task.id) {
    const query = `mutation { editTask(id: ${task.id} description: ${task.description}) { id description complete }}`
    const response = await httpClientFactory(state).fetchGraphql(query)
    commit(mutationTypes.SAVE_TASK, { task: response.editTask })
  } else {
    const query = `mutation { addTask(trip_id: ${task.tripId} description: "${task.description}") { id description complete }}`
    const response = await httpClientFactory(state).fetchGraphql(query)
    commit(mutationTypes.SAVE_TASK, { task: response.addTask })
  }

  commit(mutationTypes.TOGGLE_LOADING)
}

async function toggleTask({ commit, state }, { taskId, complete }) {
  commit(mutationTypes.TOGGLE_LOADING, { loading: true })

  const query = `mutation { toggleTask(id: ${taskId} complete: ${complete}){ id }}`
  await httpClientFactory(state).fetchGraphql(query)
  commit(mutationTypes.TOGGLE_TASK, { taskId, complete })

  commit(mutationTypes.TOGGLE_LOADING)
}

const actions = {
  [actionTypes.DELETE_TASK]: deleteTask,
  [actionTypes.FETCH_TASKS]: fetchTasks,
  [actionTypes.SAVE_TASK]: saveTask,
  [actionTypes.TOGGLE_TASK]: toggleTask
}

export default actions
