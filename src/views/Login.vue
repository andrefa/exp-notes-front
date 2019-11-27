<template>
  <div class="column col-6 col-lg-8 col-md-12 col-sm-12 col-mx-auto">
    <div class="empty">
      <div class="empty-icon"><i class="icon icon-3x icon-people"></i></div>
      <p class="empty-title h5">Login</p>
      <div class="form-group">
        <label class="form-label" for="login-email">Email</label>
        <input class="form-input" type="text" id="login-email"
          v-model="email" placeholder="Email">
      </div>
      <div class="form-group">
        <label class="form-label" for="login-pwd">Password</label>
        <input class="form-input" type="password" id="login-pwd"
          v-model="password" placeholder="Password">
      </div>
      <div class="form-group">
        <button class="btn btn-primary input-group-btn" v-on:click="login" :disabled="loading">
          Login
        </button>
      </div>
      <p class="empty-title text-error">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { LOGIN } from '@/shared/store/action-types'

export default {
  data: () => ({
    email: '',
    password: '',
    error: ''
  }),
  computed: mapState({
    loading: 'loading'
  }),
  methods: {
    async login() {
      try {
        this.error = ''
        await this.$store.dispatch(LOGIN, { email: this.email, password: this.password })
        this.$router.push('/trips')
      } catch (exception) {
        this.error = exception.message
      }
    }
  }
}
</script>
