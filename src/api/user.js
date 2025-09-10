import apiClient from '@/utils/api'

export const queryUserById = async (id) => {
  try {
    const response = await apiClient.get(`/api/users/profile/${encodeURIComponent(id)}`)
    return response.data   // 此处必须返回data才能拿到后端返回的完整响应
  } catch (err) {
    if (err.response) {
      if (err.response.status === 404) {
        throw err
      } else {
        throw new Error(`请求失败：${err.response.status}`)
      }
    } else {
      throw new Error('网络错误或服务不可用')
    }
  }
}