<template>
  <header class="navbar bg-primary">
    <section class="navbar-section" v-if="authenticated">
      <router-link to="/trips">Trips</router-link>
      <router-link to="/lists">Lists</router-link>
      <a v-on:click="logout" href="#">Logout</a>
    </section>
    <section class="navbar-center">
      <h2>Expense notes</h2>
    </section>
    <section class="navbar-section"></section>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import { LOGOUT } from '@/shared/store/action-types'

export default {
  name: 'Navbar',
  computed: {
    ...mapGetters([
      'authenticated'
    ])
  },
  methods: {
    logout() {
      this.$store.dispatch(LOGOUT)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  a {
    margin-left: 20px;
    color: white;
  }
  h2 {
    margin: 0;
  }
  .navbar-center {
    margin: .5em;
  }
</style>
