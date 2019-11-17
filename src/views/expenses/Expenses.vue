<template>
  <main>
    <h1>Expenses!</h1>
    {{ expenses }}
  </main>
</template>

<script>
import { mapState } from 'vuex'
import * as actionTypes from '@/shared/store/action-types'

export default {
  name: 'Expenses',
  computed: mapState([
    'expenses'
  ]),
  created() {
    this.$store.dispatch(actionTypes.FETCH_EXPENSES, { tripId: this.$route.params.tripId })
  }
}
</script>
