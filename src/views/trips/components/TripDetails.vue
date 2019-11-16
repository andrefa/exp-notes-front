<template>
  <div v-if='trip'>
    <h1>Traveling to {{ trip.name }}</h1>
    <TaskList />
    <TaskForm />
  </div>
</template>

<script>
import TaskForm from './TaskForm.vue'
import TaskList from './TaskList.vue'
import { FETCH_TASKS } from '@/shared/store/action-types'

export default {
  name: 'TripDetails',
  components: {
    TaskForm,
    TaskList
  },
  computed: {
    trip() {
      return this.$store.getters.trip(this.$route.params.tripId)
    }
  },
  watch: {
    trip(newValue) {
      if (newValue != null) {
        this.$store.dispatch(FETCH_TASKS, { tripId: newValue.id })
      }
    }
  }
}
</script>
