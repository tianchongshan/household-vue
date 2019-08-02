import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import register from "../components/register"; //加载组件login

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path: '/register',
      component: register
    }
  ]
})
