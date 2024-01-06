<template>
  <div>
    <Header v-bind:title="headerTitle"/>
    <div>
      <button @click="prev()">Prethodno</button>
      ...
      <button @click="next()">Sledece</button>
    </div>
    <StudentiList v-if="sviStudentiIDs" :studentiIDs="sviStudentiIDs.slice(current * 10, current * 10 + 10)" />
    <p v-else>List is not ready yet</p>
  </div>
</template>


<script>
import Header from '@/components/Header.vue'
import StudentiList from '@/components/StudentiList.vue'
import { mapActions, mapState } from 'vuex'


export default {
  name: 'App',
  components: {
    Header, StudentiList
  },
  data(){
    return{
      headerTitle: "RAF Alumni",
      current: 0
    }
  },
  methods:{
    ...mapActions([
      'fetchSviStudenti'
    ]),
    next(){
      if( this.current * 10 < this.sviStudentiIDs.length ){
        this.current++;
      }
    },
    prev(){
      if( this.current > 0){
        this.current--;
      }
    },
  },
  computed:{
    ...mapState([
      'sviStudentiIDs'
    ])
  },
  mounted(){
    this.fetchSviStudenti();
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
