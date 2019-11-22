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
        <TripCardStatus :status="status"/>
        <div>
          <figure class="avatar avatar-xl"
            v-for="user in trip.users"
            v-bind:key='`user-${user.id}`'>
            <img :src="`https://pt.gravatar.com/avatar/${md5Hash(user.email)}`"
              :alt="user.name" :title="user.name">
          </figure>
        </div>
        <div class="card-subtitle text-gray trip-period body-font-size">
          From {{ startDate }}
          to {{ endDate }}
        </div>
        <div class="card-subtitle body-font-size" v-if="status !== 'FINISHED'">
          <span class="enphasize">Remaining days:</span> {{ trip.remaining_days }}
        </div>
        <div class="card-subtitle body-font-size" v-else>
          <span class="enphasize">Trip finished :(</span>
        </div>
        <div class="card-subtitle body-font-size" v-if="status !== 'FINISHED'">
          <span class="enphasize">Remaining per day:</span>
            ${{ trip.remaning_amount_per_day }}
        </div>
        <div class="card-subtitle body-font-size" v-else>
          <span class="enphasize">Money left:</span>
            ${{ trip.remaning_amount_per_day }}
        </div>
      </div>

      <div class="card-footer">
        <a class="btn btn-primary" v-on:click="setActiveTrip(trip.id)">Tasks</a>
        <a class="btn btn-primary" :class="{ disabled: status === 'COMING' }"
            v-on:click="gotoExpenses(trip.id)">Expenses</a>
        <a class="btn btn-primary" :class="{ disabled: status === 'COMING' }"
            v-on:click="gotoReports(trip.id)">Reports</a>
        <button class="btn btn-action s-circle" v-on:click="addExpense(trip.id)"
          title="Add expense" :class="{ disabled: status === 'COMING' }">
          <i class="icon icon-plus"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import md5 from 'md5'
import TripCardStatus from '@/views/trips/components/TripCardStatus.vue'
import { formatStringDate, isBeforeNow, isAfterNow } from '@/shared/date/date-provider'


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
    },
    status() {
      if (isBeforeNow(this.endDate)) {
        return 'FINISHED'
      }
      if (isAfterNow(this.startDate)) {
        return 'COMING'
      }
      return 'CURRENT'
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
    },
    addExpense(id) {
      this.$router.push(`/expenses/add/${id}`)
    },
    md5Hash(text) {
      return md5(text)
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
  .trip-period{
    margin-bottom: 0.5rem
  }
  .body-font-size {
    font-size: 0.7rem;
  }
  .btn {
    margin: .4rem .4rem 0 0;
  }
  .enphasize {
    font-weight: bold;
  }
</style>
