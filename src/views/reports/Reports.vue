<template>
  <main>
    <h1>Spent per source</h1>
    <PieChart :chartdata="pieChartSpentPerSource" :options="{}" />
    <h1>Spent per category</h1>
    <PieChart :chartdata="pieChartSpentPerCategory" :options="{}" />
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
import PieChart from '@/views/reports/components/PieChart.vue'

export default {
  name: 'Lists',
  components: {
    PieChart
  },
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
    },
    pieChartSpentPerSource() {
      return {
        labels: this.spentPerSource.map(s => s.source),
        datasets: [{
          backgroundColor: this.spentPerSource.map(() => this.getRandomColor()),
          data: this.spentPerSource.map(s => s.amount)
        }]
      }
    },
    pieChartSpentPerCategory() {
      return {
        labels: this.spentPerCategory.map(s => s.category),
        datasets: [{
          backgroundColor: this.spentPerSource.map(() => this.getRandomColor()),
          data: this.spentPerSource.map(s => s.amount)
        }]
      }
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
  },
  methods: {
    getRandomColor() {
      const letters = '0123456789ABCDEF'
      let color = '#'
      // eslint-disable-next-line
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
      }
      return color
    }
  }
}
</script>

<style scoped>
  table {
    margin-bottom: 1.5rem;
  }
</style>
