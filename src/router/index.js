import { createRouter, createWebHistory } from 'vue-router'

// 路径必须正确，注意大小写和文件扩展名
const Home = () => import('../views/HomeView.vue')
const AboutCreator = () => import('../views/AboutCreator.vue')
const User = () => import('../views/UserView.vue')
const GoodAdd = () => import('../views/UserView/goodOperateView/GoodAddView.vue')
const UserProfile = () => import('../views/UserView/userProfile/UserProfile.vue')
const GoodShow = () => import('../views/UserView/goodOperateView/GoodShowView.vue')

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
    path: '/user',
    name: 'user',
    component: User,
    meta: {
        title: '我的',
        showInNav: true
    },
    children: [
      {
        path: '',
        redirect: '/user/profile',
      },
      {
        path: 'addgood',
        name: 'addGood',
        component: GoodAdd,
        meta: {
            title: '添加商品',
            showInNav: false
        }
      },
      {
        path: 'profile',
        name: 'userProfile',
        component: UserProfile,
        meta: {
            title: '个人信息',
            showInNav: false
        }
      },
      {
        path: 'showgood',
        name: 'showGood',
        component: GoodShow,
        meta: {
          title: '展示商品',
          showInNav: false
        }
      }
    ]
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