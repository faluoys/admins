import {createApp} from 'vue'
//导入pinia
import {createPinia} from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'

import '@/styles/tailwind.css'
import '@/styles/index.less'
//创建pinia实例
const pinia = createPinia()
// 5. 创建并挂载根实例
const app = createApp(App)
app.use(router)
//挂载pinia
app.use(pinia)
app.mount('#app')
