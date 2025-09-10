<template>
  <div class="user-profile">
    <h2>用户信息</h2>
    <div v-if="userData">
      <p><strong>用户名：</strong>{{ userData.userName }}</p>
      <p><strong>邮箱：</strong>{{ userData.userEmail }}</p>
      <p><strong>账号：</strong>{{ userData.userAccount }}</p>
      <p><strong>最后登录IP: </strong>{{ userData.lastLoginIp }}</p>
    </div>
    <div v-else-if="error" class="error">
      {{ error }}
    </div>
    <div v-else>
      加载中...
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { queryUserById } from '@/api/user';

const userData = ref('');
const error = ref('');

// 假设用户ID为1，实际应用中应动态获取
const userId = 1; 

// 将异步逻辑封装成函数
const fetchUserData = async () => {
  try {
    const response = await queryUserById(userId);
    userData.value = response.data;
  } catch (err) {
    error.value = err.response?.data?.message || '获取用户信息失败';
  }
};

// 在组件挂载后执行
onMounted(() => {
  fetchUserData();
});
</script>

<style scoped>
.user-profile {
  padding: 20px;
}
.error {
  color: red;
}
</style>