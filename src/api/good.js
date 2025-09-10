import apiClient from '@/utils/api'

// 查询商品
export const queryGoodByName = async (name) => {
  if (!name?.trim()) {
    throw new Error('商品名称不能为空')
  }

  try {
    const response = await apiClient.get(`/api/goods`, {
      params: { name: name.trim() }
    })
    return response.data
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

export const queryGoodById = async (id) => {
  if (!id) {
    throw new Error('商品ID不能为空')
  }

  try {
    const response = await apiClient.get(`/api/goods/${encodeURIComponent(id)}`)
    return response.data
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

export const deleteGoodById = async (id) => {
  if (!id) {
    throw new Error('商品ID不能为空')
  }

  try {
    const response = await apiClient.delete(`/api/goods/${encodeURIComponent(id)}`)
    return response.data
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

export const addGood = async (good) => {
  try {
    const response = await apiClient.post('/api/goods', good)
    return response.data
  } catch (err) {
    if (err.response) {
      if (err.response.status === 400) {
        throw err
      } else {
        throw new Error(`请求失败：${err.response.status}`)
      }
    } else {
      throw new Error('网络错误或服务不可用')
    }
  }
}

export const updateGood = async (id, good) => {
  if (!id) {
    throw new Error('商品ID不能为空')
  }

  try {
    const response = await apiClient.put(`/api/goods/${encodeURIComponent(id)}`, good)
    return response.data
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

