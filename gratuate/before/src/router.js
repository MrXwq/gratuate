import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './view/home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
  ]
})