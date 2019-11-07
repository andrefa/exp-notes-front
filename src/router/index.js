import Vue from 'vue'
import VueRouter from 'vue-router'

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
    path: '/home',
    name: 'home',
    // lazy loading
    meta: { title: 'Home' },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/lists',
    name: 'lists',
    meta: { title: 'Lists' },
    // lazy loading
    component: () => import('../views/Lists.vue')
  },
  {
    path: '/reports',
    name: 'reports',
    meta: { title: 'Reports' },
    // lazy loading
    component: () => import('../views/Reports.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/' && !localStorage.getItem('AUTH_TOKEN')) {
    next('/')
  } else if (to.path === '/' && localStorage.getItem('AUTH_TOKEN')) {
    next('/home')
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
