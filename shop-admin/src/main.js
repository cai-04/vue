import { createApp } from 'vue'
import Router from './tools/Router'
import Store from './tools/Storage'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App)
app.use(ElementPlus)
app.use(Router)
app.use(Store)
app.mount('#app')
