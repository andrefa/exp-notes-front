<template>
  <div>
    <div v-if="!tasks || tasks.length === 0">
      You don't have any task for this trip yet.
    </div>
    <div v-for='task in tasks' v-bind:key='`task-state-${task.id}`'>
      <input type='checkbox'
          :name='`task-state-${task.id}`'
          v-model='task.complete'
          v-on:click='toggleTask(task.id, !task.complete)'>
      <label :for='`task-state-${task.id}`'
          v-bind:class='{ complete: task.complete }'>
        {{ task.description }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tasks',
  props: {
    tasks: Array,
    toggleTask: Function
  }
}
</script>

<style scoped>
  .complete {
    text-decoration: line-through;
  }
</style>
