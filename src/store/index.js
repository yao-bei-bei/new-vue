import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  //存储用户权限信息，初始时为空
  roles: '',
  showFooter:true,
  changableNum:0,
}

const getters = {
  getRoles: state => state.roles,
  isShow(state) {  //承载变化的showFooter的值
    return state.showFooter
  },
  getChangedNum(){  //承载变化的changebleNum的值
    return state.changableNum
  }
}

const mutations = {
  //添加用户权限，如果存在，不添加
  addRoles(state,{roles}) {
    state.roles = roles;
  },
  show(state){
    state.showFooter=true
  },
  hide(state){
    state.showFooter=false
  },
  getChangedNum(state,sum){
    console.log(state.changableNum+sum)
    state.changableNum+=sum;
  }
}

const actions = {
  addRoles:({commit},{roles}) =>{
    commit('addRoles',{roles});
  },
  showFooter:({commit})=>{
    commit('show');
  },
  hideFooter:({commit})=>{
    commit('hide');
  },
  getNewNum:({commit},num)=>{
   commit('getChangedNum',num)
  }
}

export default new Vuex.Store({
  namespaced: true,
  state,
  getters,
  mutations,
  actions
})
