<!-- UserView.vue -->
<template>
  <div class="user-layout">
    <!-- 左侧导航 -->
    <!--实际上，增删查改全部塞进一个路由即可，在我的商品里，通过图表进入对饮功能的路由即可-->
    <nav class="user-nav">
      <router-link to="/user/profile">个人信息</router-link>
      <router-link to="/user/showgood">我的商品</router-link>
      <router-link to="/user/addgood">添加商品</router-link>
      <router-link to="/">返回首页</router-link>
    </nav>

    <!-- 右侧内容区 -->
    <main class="user-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
// 你可以在这里添加用户数据获取逻辑
</script>

<style scoped>
/* 整体布局：左右结构 */
.user-layout {
  display: flex;
  min-height: 100vh; /* 占满视口高度 */
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* 左侧导航栏 */
.user-nav {
  width: 200px;
  background-color: #f8f9fa;
  border-right: 1px solid #ddd;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* 导航链接样式 */
.user-nav a {
  display: block;
  padding: 12px 20px;
  color: #333;
  text-decoration: none;
  font-size: 15px;
  transition: all 0.2s;
}

/* 鼠标悬停效果 */
.user-nav a:hover {
  background-color: #e9ecef;
  color: #007bff;
}

/* 当前激活的路由链接高亮 */
.user-nav a.router-link-exact-active {
  background-color: #007bff;
  color: white;
  font-weight: 500;
}

/* 右侧内容区 */
.user-content {
  flex: 1;
  padding: 30px;
  background-color: #ffffff;
  min-width: 0; /* 防止内容溢出 */
}

/* 可选：添加边框阴影 */
.user-content {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}
</style>