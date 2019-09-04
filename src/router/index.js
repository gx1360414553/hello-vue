import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/Main'
import Login from '../views/Login'

import UserProfile from '../views/user/UserProfile'
import UserList from '../views/user/UserList'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/main/:username",
      name: "Main",
      component: Main,
      children:[
        {path:'/user/list', name:'UserList',component:UserList},
        {path:'/user/profile/:id', name:'UserProfile',component:UserProfile, props: true}
      ]
    },
    {
      path: "/Login",
      name: "Login",
      component: Login
    }
  ]
});
