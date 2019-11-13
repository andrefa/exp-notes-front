<template>
  <div>
    <Loading />
    <button class='btn btn-primary'
        v-bind:class='{ disabled: trip.id == activeTripId }'
        v-for='trip in trips'
        v-bind:key='trip.id'
        v-on:click='setActiveTrip(trip.id)'>
      {{ trip.name }}
    </button>
    {{ activeTrip }}
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue'
import { FETCH_TRIPS } from '@/store/action-types'

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
    }
  },
  created() {
    this.$store.dispatch(FETCH_TRIPS)
  },
  methods: {
    setActiveTrip(id) {
      this.$router.push(`/home/${id}`)
    }
  }
}
</script>

<style scoped>
  button {
    margin: .6rem 0 0 .6rem;
  }
</style>
