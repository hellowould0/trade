import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router) // 必须 use(router)，否则路由不生效！

app.mount('#app')
