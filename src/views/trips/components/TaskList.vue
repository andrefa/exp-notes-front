<template>
  <div>
    <h4>Pending tasks</h4>
    <div v-if="!hasTasks">
      You don't have any task for this trip yet.
    </div>
    <TaskItem v-for='task in tasks' v-bind:key='`task-state-${task.id}`' :task="task"/>
  </div>
</template>

<script>
import TaskItem from './TaskItem.vue'

export default {
  name: 'TaskList',
  components: {
    TaskItem
  },
  computed: {
    tasks() {
      return this.$store.state.tasks
    },
    hasTasks() {
      return this.tasks && this.tasks.length > 0
    }
  }
}
</script>
