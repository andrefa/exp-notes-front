<template>
  <span v-if="loading">CA RRE GAN DO</span>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Loading',
  computed: mapState([
    'loading'
  ])
}
</script>
