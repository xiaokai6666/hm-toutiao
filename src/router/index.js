import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import NotFound from '@/views/404'
Vue.use(VueRouter)
const router = new VueRouter({
  // 配置对象
  // 路由规则选项 routes  若干规则
  routes: [{
    path: '/login',
    component: Login

  },
  {
    path: '/',
    component: Home,
    children: [
      // 欢迎
      {
        path: '/',
        component: Welcome
      }, {
        path: '*',
        component: NotFound
      }
    ]
  }

  ]
})
export default router
