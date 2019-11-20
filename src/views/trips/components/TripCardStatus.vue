<template>
  <span class="label label-primary" v-if="status === 'CURRENT'">
    Current
  </span>
  <span class="label label-success" v-else-if="status === 'COMING'">
    Coming
  </span>
  <span class="label" v-else-if="status === 'FINISHED'">
    Finished
  </span>
</template>

<script>
export default {
  name: 'TripCardStatus',
  props: {
    status: String
  }
}
</script>

<style scoped>
  .label {
    margin-left: 0.5rem
  }
</style>
