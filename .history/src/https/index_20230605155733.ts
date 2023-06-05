import axios from 'axios'
export const Service = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  }
})