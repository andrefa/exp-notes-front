<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <span>resumo budget</span>
    <br />
    <span>tabela gastos</span>
    <br />
    <span>tabela tasks</span>
    <br />
    <Loading />
    <span>{{ trips }}</span>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Loading from '@/components/Loading.vue'
import { FETCH_TRIPS } from '@/store/action-types'

export default {
  name: 'home',
  data: () => ({
    api: process.env.VUE_APP_API_URL
  }),
  components: {
    HelloWorld,
    Loading
  },
  computed: {
    trips() {
      return this.$store.state.trips
    }
  },
  created() {
    this.$store.dispatch(FETCH_TRIPS)
  }
}
</script>
