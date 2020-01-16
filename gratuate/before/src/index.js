import Vue from "vue";
import App from "./App.vue";
import router from './router.js';

export const root = new Vue({
  router,
  render: h => h(App)
});
root.$mount("#app");