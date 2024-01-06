<template>
  <div>
    <Header v-bind:title="headerTitle"/>
    <div>
      <button @click="prev()">Prethodno</button>
      ...
      <button @click="next()">Sledece</button>
    </div>
    <StudentiList v-if="sviStudenti" :studentiIDs="sviStudenti.slice(current * 10, current * 10 + 10)" />
    <p v-else>List is not ready yet</p>
  </div>
</template>


<script>
import Header from './components/Header.vue'
import StudentiList from '@/components/StudentiList.vue'


export default {
  name: 'App',
  components: {
    Header, StudentiList
  },
  data(){
    return{
      headerTitle: "RAF Alumni",
      sviStudenti: null,
      current: 0
    }
  },
  methods:{
    next(){
      if( this.current * 10 < this.sviStudenti.length ){
        this.current++;
      }
    },
    prev(){
      if( this.current > 0){
        this.current--;
      }
    }
  },
  mounted(){
    fetch("http://alumni.raf.edu.rs/rs/api/list")
    .then( res=>res.json() )
    .then( data=>{
      this.sviStudenti = data;
    });
  }


}

</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Gloock&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
