<template>
  <main>
    <div class="cards-container">
      <TripCard v-for='trip in trips'
        v-bind:key='`trip-${trip.id}`'
        :trip="trip"
        :setActiveTrip="setActiveTrip"/>
    </div>
    <h1 v-if='activeTrip'>Traveling to {{ activeTrip.name }}</h1>
    <h4 v-if='activeTrip'>Pending tasks</h4>
    <Tasks :tasks="tasks" :toggleTask="toggleTask"/>
  </main>
</template>

<script>
import Tasks from '@/shared/components/Tasks.vue'
import TripCard from '@/shared/components/TripCard.vue'
import { FETCH_TASKS, FETCH_TRIPS, TOGGLE_TASK } from '@/shared/store/action-types'

export default {
  name: 'trips',
  components: {
    Tasks,
    TripCard
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
      this.$router.push(`/trips/${id}`)
    },
    toggleTask(taskId, complete) {
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
  main {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: baseline;
    align-content: stretch;
  }
  main > * {
    margin-bottom: 20px;
  }
  .cards-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: space-around;
    width: 100%;
  }
  button {
    margin: .6rem 0 0 .6rem;
  }
</style>
