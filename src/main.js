import Vue from 'vue'
import Vuex from 'vuex'
// import ApolloClient from 'apollo-boost'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import createStore from './stores'

Vue.use(Vuex)
Vue.config.productionTip = false

// const apolloClient = new ApolloClient({
//   uri: 'https://exp-notes.herokuapp.com//graphql',
//   tokenName: 'AUTH_TOKEN'
// })

// Vue.use(apolloClient)

new Vue({
  router,
  store: createStore(),
  render: h => h(App)
}).$mount('#app')
