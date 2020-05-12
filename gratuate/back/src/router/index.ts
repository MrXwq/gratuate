import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue';
import About from '../views/About.vue';
import Login from '../views/login.vue';
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
      },
      {
        path: '/param/create',
        name: 'ParamCreate',
        component: () => import("@/components/special/menu/ParamCreate.vue")
      },
      {
        path: '/param/create/:id',
        name: 'ParamCreate',
        component: () => import("@/components/special/menu/ParamCreate.vue"),
        props: true
      },
      {
        path: '/param/list',
        name: 'ParamList',
        component: () => import("@/components/special/menu/ParamList.vue")
      },
      {
        path: '/service/create',
        name: 'ServiceCreate',
        component: () => import("@/components/special/menu/ServiceCreate.vue")
      },
      {
        path: '/service/create/:id',
        name: 'ServiceCreate',
        component: () => import("@/components/special/menu/ServiceCreate.vue"),
        props: true
      },
      {
        path: '/service/list',
        name: 'ServiceList',
        component: () => import("@/components/special/menu/ServiceList.vue")
      },
      {
        path: '/ads/create',
        name: 'AdsCreate',
        component: () => import("@/components/special/menu/AdsCreate.vue")
      },
      {
        path: '/ads/create/:id',
        name: 'AdsCreate',
        component: () => import("@/components/special/menu/AdsCreate.vue"),
        props: true
      },
      {
        path: '/ads/list',
        name: 'AdsList',
        component: () => import("@/components/special/menu/AdsList.vue")
      },
      {
        path: '/service/list',
        name: 'ServiceList',
        component: () => import("@/components/special/menu/ServiceList.vue")
      },
      {
        path: '/user/create',
        name: 'UserCreate',
        component: () => import("@/components/special/menu/UserCreate.vue")
      },
      {
        path: '/user/create/:id',
        name: 'UserCreate',
        component: () => import("@/components/special/menu/UserCreate.vue"),
        props: true
      },
      {
        path: '/user/list',
        name: 'UserList',
        component: () => import("@/components/special/menu/UserList.vue")
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login,
    meta: { isPublic: true }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if(!to.meta.isPublic && !localStorage.token ){
    return next('/login')
  }
  next()
})

export default router
