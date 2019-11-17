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
  }
}
</script>
