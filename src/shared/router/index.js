import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/shared/store'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: { title: 'Login' }
  },
  {
    path: '/trips/:tripId?',
    name: 'trips',
    meta: { title: 'Trips' },
    // lazy loading
    component: () => import('@/views/trips/Trips.vue')
  },
  {
    path: '/expenses/:tripId',
    name: 'expenses',
    meta: { title: 'Trips' },
    // lazy loading
    component: () => import('@/views/expenses/Expenses.vue')
  },
  {
    path: '/lists',
    name: 'lists',
    meta: { title: 'Lists' },
    // lazy loading
    component: () => import('@/views/lists/Lists.vue')
  },
  {
    path: '/reports/:tripId',
    name: 'reports',
    meta: { title: 'Reports' },
    // lazy loading
    component: () => import('@/views/reports/Reports.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const { authenticated } = store.getters

  if (to.path !== '/' && !authenticated) {
    next('/')
  } else if (to.path === '/' && authenticated) {
    next('/trips')
  } else {
    next()
  }
})

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title
  })
})

export default router
