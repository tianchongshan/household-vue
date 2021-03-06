// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueResource from 'vue-resource'
import router from './router'

import axios from 'axios'
axios.defaults.withCredentials=true;  //跨域保存session有用
axios.defaults.baseURL="http://localhost:3000";
Vue.prototype.$reqs=axios;
Vue.use(ElementUI);
Vue.use(VueResource);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
