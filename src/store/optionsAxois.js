import axios from 'axios'
const api = axios.create({
  baseURL:
    'https://apricot-shortcake-65218.herokuapp.com' || 'http://localhost:8000'
})
export default api
