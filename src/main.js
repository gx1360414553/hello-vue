import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "./router"

import App from './App'

import axios from 'axios'
Vue.prototype.axios = axios;

Vue.use(VueRouter);
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
