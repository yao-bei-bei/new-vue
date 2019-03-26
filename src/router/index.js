import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/iview/login/Login'
import Home from '@/iview/home/Home'
import Admin from '@/iview/home/Admin'
import Guest from '@/iview/home/Guest'
import Tips from '@/iview/404/Tips'
import Box  from '@/iview/home/Box'
import Boss from  '@/iview/home/Boss'
import $ from "jquery"
Vue.use(Router);
export default new Router({
  routes:[
    {
      path: '/',
      redirect:'/login',
      component: Login,
      meta: ['admin', 'user']
    },
    {
      path:'/login',
      name:'login',
      component: Login,
      meta: ['admin', 'user']
    },
    {
      path:'/tips',
      name:'tips',
      component: Tips,
      meta: ['admin', 'user']
    },
    {
      path:'/home',
      name:'home',
      component: Home,
      redirect: '/home/Admin',
      meta: ['admin', 'user'],
      children: [
        {
          path:'admin',
          name:'用户权限管理',
          component: Admin,
          meta: ['admin','user'],
        },
        {
          path:'guest',
          name:'Guest',
          component: Guest,
          meta: ['admin']
        },
        {
          path:'box',
          name:'box',
          component: Box,
          meta: ['admin', 'user']
        },
        {
          path:'boss',
          name:'boss',
          component: Boss,
          meta: ['admin','user']
        }
      ]
    }
  ]
})
