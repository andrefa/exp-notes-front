<template>
  <main>
    <h1>Expenses!</h1>
    <table class="table table-striped table-hover table-scroll">
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Price</th>
          <th>Place</th>
          <th>Description</th>
          <th>Category</th>
          <th>Source</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="exp in expenses" v-bind:key="`exp-${exp.id}`">
          <td>{{ exp.id }}</td>
          <td>{{ exp.date }}</td>
          <td>{{ exp.price }} {{ exp.currency.symbol }}</td>
          <td>{{ exp.place.name }}</td>
          <td>{{ exp.description }}</td>
          <td>{{ exp.category.name }}</td>
          <td>{{ exp.source.name }}</td>
          <td><i class="icon icon-stop" v-on:click='deleteExpense(exp.id)'></i></td>
        </tr>
      </tbody>
    </table>
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
  },
  methods: {
    deleteExpense(expenseId) {
      // eslint-disable-next-line
      if (confirm('Confirm expense removal?')) {
        this.$store.dispatch(actionTypes.DELETE_EXPENSE, { expenseId })
      }
    }
  }
}
</script>

<style scoped>
  .icon-stop {
    color: red;
  }
</style>
