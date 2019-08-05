import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import register from "../components/register";
import HelloWorld from "../components/HelloWorld"; //加载组件login

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/HelloWorld',
      component: HelloWorld
    }
  ]
})
