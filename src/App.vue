<template>
  <div id="app">
    <Navbar />
    <router-view/>

    <Loading />
  </div>
</template>

<script>
import Loading from '@/shared/components/Loading.vue'
import Navbar from '@/shared/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Loading,
    Navbar
  }
}
</script>

<style>
  main {
    padding: 15px;
  }
</style>
