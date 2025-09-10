<template>
  <div class="search-box">
    <input
      v-model="searchName"
      @keyup.enter="handleSearch"
      type="text"
      placeholder="请输入商品名称"
      class="search-input"
      :disabled="loading"
    />
    <button @click="handleSearch" :disabled="loading" class="search-btn">
      {{ loading ? '查询中...' : '搜索' }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { queryGoodByName } from '@/api/good.js'

// 定义事件：搜索成功返回商品，失败返回错误
const emit = defineEmits(['result', 'error'])

const searchName = ref('')
const loading = ref(false)

const handleSearch = async () => {
  const name = searchName.value.trim()
  if (!name) {
    emit('error', '请输入商品名称')
    return
  }

  loading.value = true
  try {
    const backData = await queryGoodByName(name)
    emit('result', backData) 
  } catch (err) {
      emit('error', err.response?.data?.message || '查询商品时发生错误') 
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.search-box {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.search-input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-btn {
  padding: 10px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.search-btn:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}
</style>