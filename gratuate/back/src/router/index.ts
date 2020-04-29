import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue';
import http from '@/utils/http'
Vue.prototype.$http = http

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    children: [
      {
        path: '/commodity/create',
        name: 'CommodityCreate',
        component: () => import("@/components/special/menu/CommodityCreate.vue")
      },
      {
        path: '/commodity/create/:id',
        name: 'CommodityCreate',
        component: () => import("@/components/special/menu/CommodityCreate.vue")
      },
      {
        path: '/commodity/list',
        name: 'CommodityList',
        component: () => import("@/components/special/menu/CommodityList.vue")
      },
      {
        path: '/categories/create',
        name: 'CategoriesCreate',
        component: () => import("@/components/special/menu/CategoriesCreate.vue")
      },
      {
        path: '/categories/create/:id',
        name: 'CategoriesCreate',
        component: () => import("@/components/special/menu/CategoriesCreate.vue"),
        props: true
      },
      {
        path: '/categories/list',
        name: 'CategoriesList',
        component: () => import("@/components/special/menu/CategoriesList.vue")
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
