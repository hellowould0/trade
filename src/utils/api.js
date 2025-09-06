import axios from 'axios'

// 创建 axios 实例
const apiClient = axios.create({
  baseURL: 'http://localhost:8081', // 你的后端地址
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default apiClient