import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    kompanije: [],
    studenti: [],
    sviStudentiIDs: []
  },
  getters: {
  },
  mutations: {
    addKompanije(state, kompanije){
      state.kompanije = kompanije
    },
    addStudent(state, student){
      state.studenti[student.id] = student;
    },
    addSviStudentiIDs(state, niz){
      state.sviStudentiIDs = niz;
    },
  },
  actions: {
    async fetchKompanije({commit}){
      fetch(`http://alumni.raf.edu.rs/rs/api/kompanije`)
        .then( res=>res.json() )
          .then( data => commit('addKompanije', data) );
    },
    async getStudent({commit, state}, studentID){
      return new Promise((resolve)=>{
        if(state.studenti[studentID]){
          resolve(state.studenti[studentID]);
        }
        else{
          fetch(`http://alumni.raf.edu.rs/rs/api/diplomac/${studentID}`)
            .then( res=>res.json() )
              .then( data=> {
                commit('addStudent', data)
                resolve(data);
              });
        }
      });
    },
    async fetchSviStudenti({commit}){
      fetch("http://alumni.raf.edu.rs/rs/api/list")
        .then( res=>res.json() )
          .then( data=> commit('addSviStudentiIDs', data) );
    },
  },
  modules: {
  }
})
