<template>
  <div class="column col-3 col-xs-12 mobile-margin">
    <div class="card">
      <div class="card-image">
        <img class="img-responsive"
          :src="`https://source.unsplash.com/256x128/?${trip.name}`"
          :alt="`${trip.name} random picture`" />
      </div>
      <div class="card-header">
        <div class="card-title h5">{{ trip.name }}</div>
        <div class="card-subtitle text-gray trip-period">
          From {{ format(trip.start_date) }}
          to {{ format(trip.end_date) }}
        </div>
      </div>
      <div class="card-footer">
        <a class="btn btn-primary" href="#cards" v-on:click="setActiveTrip(trip.id)">Details</a>
      </div>
    </div>
  </div>
</template>

<script>
import dateProvider from '@/shared/date/date-provider'

export default {
  name: 'TripCard',
  props: {
    trip: Object,
    setActiveTrip: Function
  },
  methods: {
    format: dateProvider.formatStringDate
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
</style>
