<template>
<header class="navbar bg-primary">
  <section class="navbar-section" v-if="!authenticated">
    <router-link to="/">Login</router-link>
  </section>
  <section class="navbar-section" v-if="authenticated">
    <router-link to="/home">Home</router-link>
    <router-link to="/lists">Lists</router-link>
    <router-link to="/reports">Reports</router-link>
    <span v-on:click="logout">Logout</span>
  </section>
  <section class="navbar-center">
    <h2>Expense notes</h2>
  </section>
  <section class="navbar-section"></section>
</header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  computed: {
    ...mapGetters([
      'authenticated'
    ])
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>
