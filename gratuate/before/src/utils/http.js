import axios from 'axios';
import router from '@/router';

const http = axios.create({
  baseURL: process.env.URL || 'http://localhost:3000/web',
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
    console.log(error.response.data.message)
  }
  if(error.response.status === 401) {
    router.push('/login')
  }
})
export default http;
