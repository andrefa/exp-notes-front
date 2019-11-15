<template>
  <div class="loading-container" v-if='loading'>
    <div class='loading loading-lg'></div>
  </div>
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

<style scoped>
  .loading-container {
    opacity:    0.5;
    background: #000;
    width:      100%;
    height:     100%;
    z-index:    10;
    top:        0;
    left:       0;
    position:   fixed;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .loading.loading-lg::after {
    height: 6rem;
    margin-left: -3rem;
    margin-top: -3rem;
    width: 6rem;
}
</style>
