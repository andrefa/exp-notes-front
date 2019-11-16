<template>
  <div>
    <input type="text"
        class="form-input"
        placeholder="Task description"
        v-model="task.description">
    <button class='btn btn-primary btn-lg' v-on:click='addTask()'>
      Save
    </button>

    <button class='btn btn-primary btn-lg' v-on:click='clear()'>
      Clear
    </button>
  </div>
</template>

<script>
import { CLEAR_TASK_FORM, SAVE_TASK } from '@/shared/store/action-types'

export default {
  name: 'TaskForm',
  data: () => ({
    task: {
      id: null,
      description: ''
    }
  }),
  computed: {
    taskForm() {
      return this.$store.state.taskForm
    }
  },
  methods: {
    addTask() {
      const task = {
        id: this.task.id,
        description: this.task.description,
        tripId: this.$route.params.tripId
      }
      this.$store.dispatch(SAVE_TASK, { task })
    },
    clear() {
      this.$store.dispatch(CLEAR_TASK_FORM)
    }
  },
  watch: {
    taskForm(newValue) {
      if (newValue) {
        this.task = {
          ...newValue
        }
      }
    }
  }
}
</script>

<style scoped>
  button {
    margin: .6rem .6rem 0 0;
  }
</style>
