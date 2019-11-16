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
import { SAVE_TASK } from '@/shared/store/action-types'

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
      const task = {
        id: this.task.id,
        description: this.task.description,
        tripId: this.$route.params.tripId
      }
      this.$store.dispatch(SAVE_TASK, { task })
    }
  }
}
</script>
