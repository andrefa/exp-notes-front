<template>
  <div>
    <Loading />
    <button class='btn btn-primary'
        v-bind:class='{ disabled: trip.id == activeTripId }'
        v-for='trip in trips'
        v-bind:key='`trip-${trip.id}`'
        v-on:click='setActiveTrip(trip.id)'>
      {{ trip.name }}
    </button>
    <h1 v-if='activeTrip'>{{ activeTrip.name }}</h1>
    <div v-for='task in tasks'
        v-bind:key='`task-state-${task.id}`'>
      <input type='checkbox'
          :name='`task-state-${task.id}`'
          v-model='task.complete'
          v-on:click='toggleTask(task.id, !task.complete)'>
      <label :for='`task-state-${task.id}`'>{{ task.description }}</label>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue'
import { FETCH_TASKS, FETCH_TRIPS, TOGGLE_TASK } from '@/store/action-types'

export default {
  name: 'home',
  data: () => ({
    api: process.env.VUE_APP_API_URL
  }),
  components: {
    Loading
  },
  computed: {
    trips() {
      return this.$store.state.trips
    },
    activeTripId() {
      return this.$route.params.tripId
    },
    activeTrip() {
      return this.$store.getters.trip(this.activeTripId)
    },
    tasks() {
      return this.$store.state.tasks
    }
  },
  created() {
    this.$store.dispatch(FETCH_TRIPS)
  },
  methods: {
    setActiveTrip(id) {
      this.$router.push(`/home/${id}`)
    },
    toggleTask(taskId, complete) {
      console.log(taskId, complete)
      this.$store.dispatch(TOGGLE_TASK, { taskId, complete })
    }
  },
  watch: {
    activeTrip(newValue) {
      if (newValue != null) {
        this.$store.dispatch(FETCH_TASKS, { tripId: this.activeTripId })
      }
    }
  }
}
</script>

<style scoped>
  button {
    margin: .6rem 0 0 .6rem;
  }
</style>
