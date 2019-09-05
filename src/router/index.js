import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/Main'
import Login from '../views/Login'

import UserProfile from '../views/user/UserProfile'
import UserList from '../views/user/UserList'
import NotFound from '../views/error/NotFound'


Vue.use(Router);

export default new Router({
  mode: 'history',
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
    },
    {
      path: '/goMain/:username',
      redirect: '/main/:username'
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});
