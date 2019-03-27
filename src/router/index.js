import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/iview/login/Login'
import Home from '@/iview/home/Home'
import Admin from '@/iview/home/Admin'
import Guest from '@/iview/home/Guest'
import Box  from '@/iview/home/Box'
import Boss from  '@/iview/home/Boss'
import E401 from '@/iview/error-page/401'
import E500 from '@/iview/error-page/500'
import E404 from '@/iview/error-page/404'
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
      path:'/home',
      name:'home',
      component: Home,
      redirect: '/home/Admin',
      meta: ['admin', 'user'],
      children: [
        {
          path:'admin',
          name:'娱乐新闻',
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
    },
    {
      path: '/401',
      name: 'error_401',
      meta: ['admin','user'],
      component: E401
    },
    {
      path: '/500',
      name: 'error_500',
      meta: ['admin','user'],
      component: E500
    },
    {
      path: '*',
      name: 'error_404',
      meta: ['admin','user'],
      component: E404
    }
]
})
