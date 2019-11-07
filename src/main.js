import Vue from 'vue'
import Vuex from 'vuex'

import '@/registerServiceWorker'

import App from '@/App.vue'
import router from '@/router'
import createStore from '@/store'

Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  router,
  store: createStore(),
  render: h => h(App)
}).$mount('#app')
