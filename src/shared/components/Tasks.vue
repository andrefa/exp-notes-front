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
      <i class="icon icon-edit" v-on:click='editTask(task)'></i>
      <i class="icon icon-stop" v-on:click='deleteTask(task.id)'></i>
    </div>
    <input type="text"
        class="form-input"
        placeholder="Task description"
        v-model="selectedTask.description">
    <button class='btn btn-primary'
        v-on:click='addTask()'>
      Save
    </button>
  </div>
</template>

<script>
export default {
  name: 'Tasks',
  data: () => ({
    selectedTask: {
      description: ''
    }
  }),
  props: {
    tasks: Array,
    toggleTask: Function
  },
  methods: {
    addTask() {
      alert(this.selectedTask.description)
      alert(this.selectedTask.id)
    },
    editTask(task) {
      this.selectedTask = {
        ...task
      }
    },
    deleteTask(id) {
      // eslint-disable-next-line no-restricted-globals
      if (confirm('Confirm task removal?')) {
        console.log('deletado', id)
      }
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
