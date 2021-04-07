import axios from 'axios'
const api = axios.create({
  baseURL: 'http://localhost:8000'
  // baseURL: 'https://apricot-shortcake-65218.herokuapp.com'
})
export default api
