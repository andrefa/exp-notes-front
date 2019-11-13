<template>
  <div class='loading loading-lg' v-if='loading'></div>
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
