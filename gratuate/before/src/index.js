import Vue from 'vue';
import '@/assets/font/iconfont.css';
import App from './App.vue';
import router from './router.js';
import store from './store.js';


export const root = new Vue({
  router,
  store,
  render: (h) => h(App),
});
root.$mount('#app');