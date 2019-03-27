// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueJsonp from  'vue-jsonp'
// import api from './api/index' // 导入api接口
import bus from "vue-bus"
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView, {
    transfer: true,
    size: 'large'
});
Vue.use(bus);
Vue.use(VueJsonp)
// Vue.prototype.$api = api;
//Vue.config.productionTip = false

/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  document.title=to.name;
  //获取用户权限信息，为空即没登录，跳转至登录页
  if (to.path === '/login') {
    next();
  } else {
    let role = sessionStorage.getItem('roles') || router.app.$options.store.state.roles;
    if (role === '') {
      next('/login');
    } else {
      if(to.matched.every(item => item.meta.indexOf(role) > -1)) {
        next();
      } else {
        next('/401');
      }
    }
  }
});
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
