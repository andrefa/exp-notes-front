<template>
  <main>
    <div class="cards-container">
      <TripCard v-for='trip in trips'
        v-bind:key='`trip-${trip.id}`'
        :trip="trip" />
    </div>
    <TripDetails />
  </main>
</template>

<script>
import TripCard from '@/views/trips/components/TripCard.vue'
import TripDetails from '@/views/trips/components/TripDetails.vue'

import { FETCH_TRIPS } from '@/shared/store/action-types'

export default {
  name: 'Trips',
  components: {
    TripCard,
    TripDetails
  },
  computed: {
    trips() {
      return this.$store.state.trips
    }
  },
  created() {
    this.$store.dispatch(FETCH_TRIPS)
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
