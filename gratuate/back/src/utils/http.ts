import axios from 'axios';
import router from '@/router';
import Vue from 'vue'

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL ||  '/back',
});
// http.interceptors.request.use((config) => {
//   if(localStorage.token) {
//     config.headers.Authorization = 'Bearer ' + localStorage.token
//   }
//   return config
// }, error => {
//   return Promise.reject(error)
// })

http.interceptors.response.use(res => {
  return res
}, error => {
  if(error.response.data.message) {
    Vue.prototype.$message('error.response.data.message')
  }
  // if(error.response.status === 401) {
  //   router.push('/login')
  // }
})
export default http;
