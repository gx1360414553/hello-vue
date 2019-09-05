import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "./router"
import store from "./store"
import App from './App'

import axios from 'axios'
Vue.prototype.axios = axios;

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(ElementUI);

router.beforeEach((to,from,next) => {
  let isLogin = sessionStorage.getItem("isLogin");

  //注销
  if(to.path == '/logout'){
    sessionStorage.clear();
    next({path: '/login'});
  } else if (to.path == '/login'){
    if (isLogin != null){
      next({path: '/main'});
    }
  } else if (isLogin == null){
    next({path: '/login'});
  }

  next();
});


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
