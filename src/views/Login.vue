<template>
  <div class="column col-6 col-lg-8 col-md-12 col-sm-12 col-mx-auto">
    <div class="empty">
      <div class="empty-icon"><i class="icon icon-3x icon-people"></i></div>
      <p class="empty-title h5">Login</p>
      <p class="empty-subtitle">Access token:</p>
      <div class="empty-action input-group input-inline">
        <input class="form-input" type="text" placeholder="token" v-model="authToken" />
        <button class="btn btn-primary input-group-btn" v-on:click="login" :disabled="loading">
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { LOGIN } from '@/store/action-types'

export default {
  data: () => ({
    authToken: ''
  }),
  computed: mapState({
    loading: 'loading'
  }),
  methods: {
    login() {
      this.$store.dispatch(LOGIN, { authToken: this.authToken })
      this.$router.push('/home')
    }
  }
}
</script>
