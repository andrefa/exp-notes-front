<template>
  <div>
    <input type='checkbox'
        :name='`task-state-${task.id}`'
        v-model='task.complete'
        v-on:click='toggleTask(task.id, !task.complete)'>

    <label :for='`task-state-${task.id}`'
        v-bind:class='{ complete: task.complete }'>
      {{ task.description }}
    </label>

    <i class="icon icon-edit" v-on:click='editTask(task)'></i>
    <i class="icon icon-stop" v-on:click='deleteTask(task.id)'></i>
  </div>
</template>

<script>
import { TOGGLE_TASK } from '@/shared/store/action-types'

export default {
  name: 'TaskItem',
  props: {
    task: Object
  },
  methods: {
    editTask(task) {
      this.$store.dispatch('edit_task', task)
    },
    deleteTask(id) {
      // eslint-disable-next-line
      if (confirm('Confirm task removal?')) {
        this.$store.dispatch('delete_task', id)
      }
    },
    toggleTask(taskId, complete) {
      this.$store.dispatch(TOGGLE_TASK, { taskId, complete })
    }
  }
}
</script>

<style scoped>
  .complete {
    text-decoration: line-through;
  }
  .icon {
    margin-left: 10px;
  }
  .icon-edit {
    color: #ffe18f;
  }
  .icon-stop {
    color: red;
  }
</style>
