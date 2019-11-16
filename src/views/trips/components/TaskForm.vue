<template>
  <div>
    <input type="text"
        class="form-input"
        placeholder="Task description"
        v-model="task.description">
    <button class='btn btn-primary' v-on:click='addTask()'>
      Save
    </button>
  </div>
</template>

<script>
export default {
  name: 'TaskForm',
  data: () => ({
    task: {
      id: null,
      description: ''
    }
  }),
  methods: {
    addTask() {
      this.$store.dispatch('save_task', { task: this.task })
    }
  }
}
</script>
