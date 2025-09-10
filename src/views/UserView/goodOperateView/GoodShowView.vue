<template>
    <div class="good-show-view">
        <h2>我的商品</h2>
        <div v-if="goods">
            <ul class="good-list">
                <li v-for="good in goods" :key="good.goodId" class="good-item">
                    <p><strong>商品名称：</strong> {{ good.goodName }}</p>
                </li>
            </ul>
        </div>
        <div v-else>
            你还没有添加任何商品。
        </div>
        <div v-if="error" class="error">
            {{ error }}
        </div>
    </div>
</template>

<script setup>
import { queryGoodForMerchant } from '@/api/good';
import { ref, onMounted } from 'vue';

 // 假设商家ID为1，实际应用中应动态获取
const merchantId = 1;
const goods = ref([]);
const error = ref('');

const fetchGoods = async () => {
  try {
    const response = await queryGoodForMerchant(merchantId);
    goods.value = response.data;
  } catch (err) {
    error.value = err.response?.data?.message || '获取商品失败';
  }
};


onMounted(() => {
  fetchGoods();
});
</script>