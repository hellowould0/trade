import { createRouter, createWebHistory } from 'vue-router'

// 路径必须正确，注意大小写和文件扩展名
const Home = () => import('../views/HomeView.vue')
const AboutCreator = () => import('../views/AboutCreator.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
        title: '首页',
        showInNav: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutCreator,
    meta: {
        title: '关于我们',
        showInNav: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router