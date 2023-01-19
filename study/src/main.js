import { createApp } from 'vue'
import App from './App.vue'
// 导入ElementPlus框架
import ElementPlus from 'element-plus';
// 导入ElementPlus所需的CSS样式表
import 'element-plus/lib/theme-chalk/index.css';

// 注入Vue App
const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
