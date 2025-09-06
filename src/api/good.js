import apiClient from '@/utils/api'

// 查询商品
export const queryGoodByName = async (name) => {
  if (!name || !name.trim()) {
    throw new Error('商品名称不能为空')
  }

  try {
    const response = await apiClient.get(`/goods/query/${encodeURIComponent(name.trim())}`)
    return response.data
  } catch (err) {
    if (err.response) {
      switch (err.response.status) {
        case 404:
          throw new Error('未找到该商品')
        default:
          throw new Error(`请求失败：${err.response.status}`)
      }
    } else {
      throw new Error('网络错误或服务不可用')
    }
  }
}