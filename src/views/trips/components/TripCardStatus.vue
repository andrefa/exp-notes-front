<template>
  <span class="label label-primary" v-if="status === CURRENT">
    Current
  </span>
  <span class="label label-success" v-else-if="status === COMING">
    Coming
  </span>
  <span class="label" v-else-if="status === FINISHED">
    Finished
  </span>
</template>

<script>
import { isBeforeNow, isAfterNow } from '@/shared/date/date-provider'

export default {
  name: 'TripCardStatus',
  props: {
    startDate: String,
    endDate: String
  },
  data: () => ({
    CURRENT: 'CURRENT',
    COMING: 'COMING',
    FINISHED: 'FINISHED'
  }),
  computed: {
    status() {
      if (isBeforeNow(this.endDate)) {
        return this.FINISHED
      }
      if (isAfterNow(this.startDate)) {
        return this.COMING
      }
      return this.CURRENT
    }
  }
}
</script>

<style scoped>
  .label {
    margin-left: 0.5rem
  }
</style>
