import axios from 'axios';
// import router from '@/router';

const http = axios.create({
  baseURL: 'http://localhost:3000',
});
// http.interceptors.request.use((config) => {
//   if(localStorage.token) {
//     config.headers.Authorization = 'Bearer ' + localStorage.token
//   }
//   return config
// }, error => {
//   return Promise.reject(error)
// })

// http.interceptors.response.use(res => {
//   return res
// }, error => {
//   if(error.response.data.message) {
//     Vue.prototype.$message({
//       type: 'error',
//       message: err.response.data.message
//     })
//   }
//   if(error.response.status === 401) {
//     router.push('/login')
//   }
// })
export default http;