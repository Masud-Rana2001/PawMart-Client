import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: "https://paw-mart-server-one.vercel.app",
  withCredentials:true
})

export default axiosInstance