<template>
  <div class="column col-6 col-lg-8 col-md-12 col-sm-12 col-mx-auto">
    <div class="empty">
      <div class="empty-icon"><i class="icon icon-3x icon-people"></i></div>
      <p class="empty-title h5">Login {{count}}</p>
      <p class="empty-subtitle">Access token:</p>
      <div class="empty-action input-group input-inline">
        <input class="form-input" type="text" placeholder="token">
        <button class="btn btn-primary input-group-btn" v-on:click="incCount">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    incCount() {
      this.$store.commit('increment', { a: 2 })
    }
  }
}
</script>
