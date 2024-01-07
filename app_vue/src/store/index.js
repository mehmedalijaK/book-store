import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    knjige: [],
  },
  getters: {

  },
  mutations: {
    addKnjige(state, knjige){
      state.knjige = knjige
    },
  },
  actions: {
    async fetchKnjige({commit}){
      fetch(`http://localhost:9000/knjiga`)
        .then( res=>res.json() )
          .then( data => commit('addKnjige', data) );
    },
  },
  modules: {
  }
})
