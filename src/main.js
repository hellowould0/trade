import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router) // 必须 use(router)，否则路由不生效！
// app.use(ElementPlus) // 引入 Element Plus
app.mount('#app')
