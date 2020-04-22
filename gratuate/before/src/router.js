import Vue from 'vue'
import VueRouter from 'vue-router'
import http from '@/utils/http'
Vue.prototype.$http = http

const login = () => import('@/views/login.vue')
const register = () => import('@/views/register.vue')
const layout = () => import('@/layout/index.vue')
const home = () => import('@/views/home.vue')
const cart = () => import('@/views/cart.vue')
const order = () => import('@/views/order.vue')
const my = () => import('@/views/my.vue')
const search = () => import('@/views/search.vue')
const commoditydetail = () => import('@/views/commoditydetail.vue')
const feedback = () => import('@/views/feedback.vue')

Vue.use(VueRouter)

const router =  new VueRouter({
  routes: [{
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/',
      redirect: '/home',
      name: 'layout',
      component: layout,
      children: [{
        path: 'home',
        name: 'home',
        component: home,
      }, {
        path: 'cart',
        name: 'cart',
        component: cart,
        meta: { isPrivate: true }
      }, {
        path: 'order',
        name: 'order',
        component: order,
        meta: { isPrivate: true }
      }, {
        path: 'my',
        name: 'my',
        component: my,
        meta: { isPrivate: true }
      }, ]
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/commoditydetail',
      name: 'commoditydetail',
      component: commoditydetail
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: feedback
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.meta.isPrivate) {
    return next('/login')
  }
  next()
})

export default router