<template>
    <div class="general-page">
        <Navigation />
        <div class="search-page">
            <GoodSearchInput @result="handleResult" @error="handleError"/>
            <div v-if="goodData" class="result">
                <h3>查询结果：</h3>
                <p><strong>名称：</strong>{{ goodData.goodName }}</p>
                <p><strong>价格：</strong>{{ goodData.goodPrice }}</p>
                <p><strong>单位：</strong>{{ goodData.goodUnit }}</p>
                <p><strong>简介：</strong>{{ goodData.goodDescription }}</p>
                </div>

                <div v-if="errorMessage" class="error">
                {{ errorMessage }}
                
            </div>
        </div>
    </div>
</template>

<script setup>
import Navigation from '@/components/TotalNavigation.vue'
import { ref } from 'vue'
import GoodSearchInput from '@/components/goodsOperate/goodSearch.vue'

// 页面状态
const goodData = ref(null)
const errorMessage = ref('')

// 处理搜索结果
const handleResult = (data) => {
  goodData.value = data
  errorMessage.value = ''
}

const handleError = (msg) => {
  errorMessage.value = msg
  goodData.value = null
}

</script>

<style scoped>
.search-page {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.result {
  padding: 15px;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 4px;
}

.error {
  color: red;
  font-weight: bold;
}
</style>