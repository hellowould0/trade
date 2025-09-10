<template>
  <div class="add-good-form">
    <h2>添加新商品</h2>

    <form @submit.prevent="handleSubmit" class="form">

      <div class="form-item">
        <label for="goodName">商品名称 *</label>
        <input
          id="goodName"
          v-model.trim="form.goodName"
          type="text"
          placeholder="请输入商品名称"
          required
        />
      </div>

      <div class="form-item">
        <label for="goodPrice">价格 *</label>
        <input
          id="goodPrice"
          v-model.number="form.goodPrice"
          type="number"
          step="0.01"
          min="0"
          placeholder="请输入价格"
          required
        />
      </div>

      <div class="form-item">
        <label for="goodStock">库存 *</label>
        <input
          id="goodStock"
          v-model.number="form.goodStock"
          type="number"
          min="0"
          placeholder="请输入库存数量"
          required
        />

      </div>
        <div class="form-item">
        <label for="goodUnit">商品单位 *</label>
        <input
        id="goodUnit"
        v-model.trim="form.goodUnit"
        type="text"
        placeholder="请输入商品单位（如：件、个）"
        required
        />
      </div>

      <!-- 描述 -->
      <div class="form-item">
        <label for="goodDescription">商品描述</label>
        <textarea
          id="goodDescription"
          v-model.trim="form.goodDescription"
          rows="4"
          placeholder="请输入商品详细描述"
        ></textarea>
      </div>

      <!-- 提交按钮 -->
      <div class="form-actions">
        <button type="button" @click="handleReset" class="btn btn-secondary">
          重置
        </button>
        <button type="submit" class="btn btn-primary" :disabled="loading">
          {{ loading ? '提交中...' : '添加商品' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { addGood } from '@/api/good'
import { ref } from 'vue'

// 表单数据
const form = ref({
  goodName: '',
  goodPrice: 0,
  goodStock: 0,
  goodUnit: '',
  goodDescription: ''
})

// 按钮 loading 状态
const loading = ref(false)

// 定义事件：添加成功返回商品，失败返回错误
const emit = defineEmits(['result', 'error'])

const handleSubmit = async () => {
    console.log('表单数据：', form.value)
  // 前端基础校验
  if (!form.value.goodName) {
    alert('请填写商品名称')
    return
  }
  if (form.value.goodPrice <= 0) {
    alert('价格必须大于 0')
    return
  }
  if (form.value.goodStock <= 0) {
    alert('必须有库存')
    return
  }

  // 构造要发送的数据
  const data = { ...form.value }
  loading.value = true

  try{
    const response = await addGood(data)
    emit('result', response)
  } catch (err) {
    emit('error', err.response?.data?.message || '商品添加出错')
  } finally {
    loading.value = false
  }
  handleReset()

}

const handleReset = () => {
  form.value = {
    goodName: '',
    goodPrice: 0,
    goodStock: 0,
    goodUnit: '',
    goodDescription: ''
  }
}
</script>

<style scoped>
.add-good-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-item label {
  font-weight: 500;
  color: #333;
}

.form-item input,
.form-item textarea {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  transition: border 0.2s;
}

.form-item input:focus,
.form-item textarea:focus {
  outline: none;
  border-color: #007bff;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 20px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background-color: #0069d9;
}

.btn-primary:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background-color: #5a6268;
}

.submitted-data {
  margin-top: 30px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
  font-size: 14px;
  color: #333;
}

.submitted-data pre {
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>