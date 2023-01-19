// 导入vue框架中的createApp方法
import { createApp } from 'vue'
// 导入ElementPlus框架
import ElementPlus from 'element-plus';
// 导入导入ElementPlus框架中的CSS样式
import 'element-plus/lib/theme-chalk/index.css';
// 导入vue-axios木块
import VueAxios from 'vue-axios'
import axios from 'axios';


// 导入Vue Router模块
import { createRouter, createWebHashHistory } from 'vue-router'
// 导入我们自定义的根组件
import App from './App.vue'

import Demo1 from './components/Demo1.vue'
// import Demo2 from './components/Demo2.vue'
// import User from './components/User.vue'
// import UserSetting from './components/UserSetting.vue'
//import Category from './components/Category.vue'
// import Friends from './components/Friends.vue'

// 挂载根组件
const app = createApp(App)
app.use(ElementPlus)


app.use(VueAxios, axios)
// const routes = [
//   {
//     path: '/demo1', component: Demo1, name: 'Demo'
//   },
//   { path: '/demo2', component: Demo2 },
//   {
//     path: '/d', redirect: to => {
//       console.log(to) // to是路由对象
//       // 随机数模拟登录状态
//       let login = Math.random() > 0.5
//       if (login) {
//         return { path: '/demo1' }
//       } else {
//         return { path: '/demo2' }
//       }
//     }
//   },
//   {
//     path: '/user/:username?',
//     name: 'user',
//     component: User,
//     children: [
//       {
//         path: 'friends/:count',
//         component: Friends
//       }
//     ]
//   },
//   { path: '/user/:id(\\d+)', name: 'setting', component: UserSetting, props: true },
//   { path: '/category/:cat*', component: Category },
//   {
//     path: '/home/:username/:id',
//     components: {
//       topBar: User,
//       default: UserSetting,
//     },
//     props: { topBar: true, default: true }
//   }
// ]
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/demo1', component: Demo1,
    }
  ]
})
// router.beforeEach((to, from) => {
//   console.log(to)    // 将要跳转到的路由对象
//   console.log(from)  // 当前将要离开的路由对象
//   if (to.name != 'setting') {
//     return { name: 'setting', params: { id: "000" } }       // 返回true表示允许此次跳转，返回false表示进制此次跳转
//   }
//   return false
// })
// router.afterEach((to, from, failure) => {
//   console.log("跳转结束")
//   console.log(to)
//   console.log(from)
//   console.log(failure)
// })
app.use(router)
app.mount('#app')
