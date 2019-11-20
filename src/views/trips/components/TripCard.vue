<template>
  <div class="column col-4 col-md-6 col-xs-12 mobile-margin">
    <div class="card" v-if="trip">
      <div class="card-image">
        <img class="img-responsive"
          :src="`https://source.unsplash.com/512x256/?${trip.name}`"
          :alt="`${trip.name} random picture`" />
      </div>
      <div class="card-header">
        <span class="card-title h5">{{ trip.name }}</span>
        <TripCardStatus :startDate="trip.start_date" :endDate="trip.end_date"/>
        <div class="card-subtitle text-gray trip-period">
          From {{ startDate }}
          to {{ endDate }}
        </div>
      </div>
      <div class="card-footer">
        <a class="btn btn-primary" href="#cards" v-on:click="setActiveTrip(trip.id)">Details</a>
        <a class="btn btn-primary" href="#cards" v-on:click="gotoExpenses(trip.id)">Expenses</a>
        <a class="btn btn-primary" href="#cards" v-on:click="gotoReports(trip.id)">Reports</a>
      </div>
    </div>
  </div>
</template>

<script>
import TripCardStatus from '@/views/trips/components/TripCardStatus.vue'
import { formatStringDate } from '@/shared/date/date-provider'

export default {
  name: 'TripCard',
  components: {
    TripCardStatus
  },
  props: {
    trip: Object
  },
  computed: {
    startDate() {
      return formatStringDate(this.trip.start_date)
    },
    endDate() {
      return formatStringDate(this.trip.end_date)
    }
  },
  methods: {
    setActiveTrip(id) {
      this.$router.push(`/trips/${id}`)
    },
    gotoExpenses(id) {
      this.$router.push(`/expenses/${id}`)
    },
    gotoReports(id) {
      this.$router.push(`/reports/${id}`)
    }
  }
}
</script>

<style scoped>
  @media all and (max-width: 800px) {
    .mobile-margin:not(:last-child) > * {
      margin-bottom: 20px;
    }
  }
  .trip-period {
    font-size: 0.7rem;
  }
  .btn {
    margin: .6rem .6rem 0 0;
  }
</style>
