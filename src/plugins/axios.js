import axios from 'axios'

const api = axios.create({
  baseURL: 'https://garagem-back-dev-znah.3.us-1.fl0.io'
})


export default api;