<template>
  <main>

    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>Category</th>
          <th>Parent Category</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" v-bind:key="`category-${category.id}`">
          <td>{{ category.id }}</td>
          <td>{{ category.name }}</td>
          <td>{{ category.parent_category_id }}</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>Currency</th>
          <th>Symbol</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="currency in currencies" v-bind:key="`currency-${currency.id}`">
          <td>{{ currency.id }}</td>
          <td>{{ currency.name }}</td>
          <td>{{ currency.symbol }}</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>Place</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="place in places" v-bind:key="`place-${place.id}`">
          <td>{{ place.id }}</td>
          <td>{{ place.name }}</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>Source</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="source in sources" v-bind:key="`source-${source.id}`">
          <td>{{ source.id }}</td>
          <td>{{ source.name }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import * as actionTypes from '@/shared/store/action-types'

export default {
  name: 'Lists',
  computed: mapState([
    'categories',
    'currencies',
    'places',
    'sources'
  ]),
  created() {
    this.$store.dispatch(actionTypes.FETCH_CATEGORIES)
    this.$store.dispatch(actionTypes.FETCH_CURRENCIES)
    this.$store.dispatch(actionTypes.FETCH_PLACES)
    this.$store.dispatch(actionTypes.FETCH_SOURCES)
  }
}
</script>

<style scoped>
  table {
    margin-bottom: 1.5rem;
  }
</style>
