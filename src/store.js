import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    avatar:null
  },
  mutations: {
   setAvatar(state,url){
    state.avatar=url;
    sessionStorage.setItem('avatar',url);
   }
  },
  getters:{
    getAvatar(state){
      if(!state.avatar){
        state.avatar =sessionStorage.getItem('avatar')
     }
      return state.avatar;
    }
  },
  actions: {

  }
})
