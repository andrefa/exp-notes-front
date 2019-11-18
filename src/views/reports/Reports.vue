<template>
  <main>
    <br /><br />
    {{ spentPerSource }}
    <br /><br />
    {{ spentPerCategory }}
    <br /><br />
    {{ spentPerDay }}
    <br /><br />
    {{ remainingDays }}
    <br /><br />
    {{ remainingAmountPerSource }}
    <br /><br />
    {{ remainingAmountPerDay }}
    <br /><br />
  </main>
</template>

<script>
import { mapState } from 'vuex'
import * as actionTypes from '@/shared/store/action-types'

export default {
  name: 'Lists',
  computed: {
    ...mapState([
      'spentPerSource',
      'spentPerCategory',
      'spentPerDay',
      'remainingDays',
      'remainingAmountPerSource',
      'remainingAmountPerDay'
    ]),
    tripId() {
      return this.$route.params.tripId
    }
  },
  created() {
    const { tripId } = this
    this.$store.dispatch(actionTypes.FETCH_SPENT_PER_SOURCE, { tripId })
    this.$store.dispatch(actionTypes.FETCH_SPENT_PER_CATEGORY, { tripId })
    this.$store.dispatch(actionTypes.FETCH_SPENT_PER_DAY, { tripId })
    this.$store.dispatch(actionTypes.FETCH_REMAINING_DAYS, { tripId })
    this.$store.dispatch(actionTypes.FETCH_REMAINING_AMOUNT_PER_SOURCE, { tripId })
    this.$store.dispatch(actionTypes.FETCH_REMAINING_AMOUNT_PER_DAY, { tripId })
  }
}
</script>

<style scoped>
  table {
    margin-bottom: 1.5rem;
  }
</style>
