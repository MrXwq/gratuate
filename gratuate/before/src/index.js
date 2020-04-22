import Vue from 'vue';
import '@/assets/font/iconfont.css';
import App from './App.vue';
import router from './router.js';
import store from './store.js';

import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)


export const root = new Vue({
  router,
  store,
  render: (h) => h(App),
});
root.$mount('#app');