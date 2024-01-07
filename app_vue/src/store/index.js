import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    knjige: [],
    token: ''
  },
  getters: {

  },
  mutations: {
    addKnjige(state, knjige){
      state.knjige = knjige
    },
    setToken(state, token) {
      state.token = token;
      localStorage.token = token;
    },
    removeToken(state) {
      state.token = '';
      localStorage.token = '';
    },
  },
  actions: {
    async fetchKnjige({commit}, token){
      fetch(`http://localhost:9000/knjiga`, {
        headers: { 'Authorization': `Bearer ${token}` },
      })
        .then( res=>res.json() )
          .then( data => commit('addKnjige', data) );
    },
    register({ commit }, obj) {
      fetch('http://localhost:9001/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
        .then( data => commit('setToken', data.token) );
    },
    login({ commit }, obj) {
      fetch('http://localhost:9001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    }).then( res => res.json() )
      .then( data => {
        if (data.msg) {
          alert(data.msg);
        } else {
          commit('setToken', data.token)
        }
      });
    }
  },
  modules: {
  }
})
