<template>
  <div>
    <div class="column col-6 col-lg-8 col-md-8 col-sm-12">
      <form id="add-expense" class="form-horizontal" @submit="save">
        <div class="form-group">
          <div class="col-3 col-sm-12">
            <label class="form-label" for="input-description">Description</label>
          </div>
          <div class="col-9 col-sm-12">
            <input class="form-input" id="input-description" type="text"
              placeholder="Description" required v-model="expense.description">
          </div>
        </div>
        <div class="form-group">
          <div class="col-3 col-sm-12">
            <label class="form-label" for="input-price">Price</label>
          </div>
          <div class="col-4 col-sm-12">
            <input class="form-input" id="input-price" type="number"
              placeholder="Price" required min="0.01" step="any" v-model="expense.price">
          </div>
        </div>
        <div class="form-group">
          <div class="col-3 col-sm-12">
            <label class="form-label" for="input-date">Date</label>
          </div>
          <div class="col-4 col-sm-12">
            <input class="form-input" id="input-date" type="date"
              placeholder="Date" required v-model="expense.date">
          </div>
        </div>
        <div class="form-group">
          <div class="col-3 col-sm-12">
            <label class="form-label">Category</label>
          </div>
          <div class="col-6 col-sm-12">
            <select class="form-select select-lg" required v-model="expense.category">
              <option v-bind:value="null">Choose an option</option>
              <option v-for="option in categories"
                v-bind:value="option" v-bind:key="`categories-${option.id}`">
                {{ option.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <div class="col-3 col-sm-12">
            <label class="form-label">Source</label>
          </div>
          <div class="col-6 col-sm-12">
            <select class="form-select select-lg" required v-model="expense.source">
              <option v-bind:value="null">Choose an option</option>
              <option v-for="option in sources"
                v-bind:value="option" v-bind:key="`sources-${option.id}`">
                {{ option.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <div class="col-3 col-sm-12">
            <label class="form-label">Place</label>
          </div>
          <div class="col-6 col-sm-12">
            <select class="form-select select-lg" required v-model="expense.place">
              <option v-bind:value="null">Choose an option</option>
              <option v-for="option in places"
                v-bind:value="option" v-bind:key="`places-${option.id}`">
                {{ option.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <div class="col-3 col-sm-12">
            <label class="form-label">Currency</label>
          </div>
          <div class="col-6 col-sm-12">
            <select class="form-select select-lg" required v-model="expense.currency">
              <option v-bind:value="null">Choose an option</option>
              <option v-for="option in currencies"
                v-bind:value="option" v-bind:key="`places-${option.id}`">
                {{ option.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <div class="col-3 col-sm-12">
            <button type="submit" class="btn btn-primary float-right btn-lg" title="Add expense">
                Save
            </button>
          </div>
          <div class="col-9 col-sm-12">
            <button class="btn btn-error btn-lg" v-on:click="cancel()" title="Cancel" >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import * as actionTypes from '@/shared/store/action-types'

export default {
  name: 'AddExpense',
  data: () => ({
    expense: {
      description: null,
      price: null,
      category: null,
      source: null,
      place: null,
      currency: null
    }
  }),
  computed: {
    trips() {
      return this.$store.state.trips
    },
    ...mapState([
      'categories',
      'currencies',
      'places',
      'sources'
    ])
  },
  created() {
    this.$store.dispatch(actionTypes.FETCH_CATEGORIES)
    this.$store.dispatch(actionTypes.FETCH_CURRENCIES)
    this.$store.dispatch(actionTypes.FETCH_PLACES)
    this.$store.dispatch(actionTypes.FETCH_SOURCES)
  },
  methods: {
    async save(form) {
      form.preventDefault()

      await this.$store.dispatch(actionTypes.SAVE_EXPENSE, {
        tripId: this.$route.params.tripId,
        expense: this.expense
      })

      // eslint-disable-next-line
      alert('Success!')

      this.$router.push('/trips')
    },
    cancel() {
      this.$router.push('/trips')
    }
  }
}
</script>

<style scoped>
  button {
    margin: 0 .6rem 0 0rem;
  }
  @media (max-width: 600px) {
    button {
      margin: 0 0 0.6rem 0;
      width: 100%;
    }
  }
</style>
