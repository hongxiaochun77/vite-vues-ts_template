import axios from 'axios'
import { Toast } from 'vant'
export const Service = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  }
})
export interface AxiosResponse {
  data: any;
  status: number;
  statusText: string;
}
Service.interceptors.request.use((config:any) => {
  // 这里可以加一些请求头参数
  return config
})
Service.interceptors.response.use((response: AxiosResponse) => {
  return new Promise((resolve, reject) =>{
    if(response.data.code == 200) {
      resolve(response.data.data)
    } else {
      Toast(response.data.message)
      reject(response.data)
    }
  })
}, (error:any) => {
  Toast('服务器异常，请联系管理员！')
  return Promise.reject(error)
})