<template>
  <main>
    <div>
      <span class="br">
        <span class="enphasize">Remaining days:</span> {{ remainingDays.remaining_days }}
      </span>
      <span class="br">
        <span class="enphasize">Remaining amount per day:</span>
        $ {{ remainingAmountPerDay.remaining_per_day }}
      </span>
    </div>

    <hr>

    <BarChart v-if="barChartSpentPerDayAndCategory"
      :chartdata="barChartSpentPerDayAndCategory.data"
      :options="barChartSpentPerDayAndCategory.options"/>

    <hr>

    <PieChart v-if="pieChartSpentPerSource"
      :chartdata="pieChartSpentPerSource"
      :options="{ title: { display: true, text: 'Spent per source' },
        responsive: true}"/>

    <hr>

    <PieChart v-if="pieChartSpentPerCategory"
      :chartdata="pieChartSpentPerCategory"
      :options="{ title: { display: true, text: 'Spent per category' },
        responsive: true}"/>

    <hr>

    <PieChart v-if="pieChartRemainingAmountPerSource"
      :chartdata="pieChartRemainingAmountPerSource"
      :options="{ title: { display: true, text: 'Remaining amount per source' },
        responsive: true}"/>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import * as actionTypes from '@/shared/store/action-types'

import PieChart from '@/views/reports/components/PieChart.vue'
import BarChart from '@/views/reports/components/BarChart.vue'

import generateColorPalette from '@/shared/color-utils'

export default {
  name: 'Lists',
  components: {
    BarChart,
    PieChart
  },
  computed: {
    ...mapState([
      'spentPerSource',
      'spentPerCategory',
      'spentPerDayAndCategory',
      'remainingDays',
      'remainingAmountPerSource',
      'remainingAmountPerDay'
    ]),
    tripId() {
      return this.$route.params.tripId
    },
    barChartSpentPerDayAndCategory() {
      if (this.spentPerDayAndCategory.length === 0) {
        return null
      }

      const rawData = this.spentPerDayAndCategory
      const days = rawData.map(s => s.day).filter((s, i, a) => i === a.indexOf(s))
      const categories = rawData.map(s => s.category).filter((s, i, a) => i === a.indexOf(s))
      const colors = generateColorPalette(categories.length)

      const data = {
        labels: days,
        datasets: categories.map((cat, idx) => ({
          label: cat,
          backgroundColor: colors[idx],
          data: days.map((day) => {
            const row = rawData.find(d => d.day === day && d.category === cat)
            return row ? row.amount : 0
          })
        }))
      }

      const options = {
        title: { display: true, text: 'Spent per day per category' },
        responsive: true,
        scales: { xAxes: [{ stacked: true }], yAxes: [{ stacked: true }] }
      }

      return {
        data,
        options
      }
    },
    pieChartSpentPerSource() {
      if (this.spentPerSource.length === 0) {
        return null
      }

      return {
        labels: this.spentPerSource.map(s => s.source),
        datasets: [{
          backgroundColor: generateColorPalette(this.spentPerSource.length),
          data: this.spentPerSource.map(s => s.amount)
        }]
      }
    },
    pieChartSpentPerCategory() {
      if (this.spentPerCategory.length === 0) {
        return null
      }

      return {
        labels: this.spentPerCategory.map(s => s.category),
        datasets: [{
          backgroundColor: generateColorPalette(this.spentPerCategory.length),
          data: this.spentPerCategory.map(s => s.amount)
        }]
      }
    },
    pieChartRemainingAmountPerSource() {
      if (this.remainingAmountPerSource.length === 0) {
        return null
      }

      return {
        labels: this.remainingAmountPerSource.map(s => s.source),
        datasets: [{
          backgroundColor: generateColorPalette(this.remainingAmountPerSource.length),
          data: this.remainingAmountPerSource.map(s => s.remaining_per_source)
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
  }
}
</script>

<style scoped>
  main > * {
    margin-bottom: 2rem;
  }
  .enphasize {
    font-weight: bold;
  }
  .br {
    display: block;
  }
</style>
