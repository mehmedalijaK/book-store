<template>


	<div class="student">
        <div v-if="student">
            <Header :title="student.ime + ' ' + student.prezime"/>

            <img class="slika" v-if="student.slika" 
                :src="'http://alumni.raf.edu.rs/images/slike/' + student.slika" />
            <p v-else>Nema slike</p>

            <div class="info">
                <h3>Studije</h3>
                <div v-if="student.studije.osnovne">
                    {{student.studije.osnovne.datum_diplomiranja}} 
                    {{student.studije.osnovne.steceno_zvanje}}
                </div>
                <div v-if="student.studije.master">
                    {{student.studije.osnovne.datum_diplomiranja}} 
                    {{student.studije.osnovne.steceno_zvanje}}
                </div>

                <h3>Zaposlenja</h3>
                <div class="zaposlenje" v-for="zaposlenje in student.zaposlenja" 
                    :key="zaposlenje.id" :zaposlenje="zaposlenje">
                    <span class="period">
                        {{zaposlenje.pocetak}} - {{zaposlenje.kraj}}
                    </span>
                    <br>
                    <b>{{zaposlenje.kompanija}}</b> {{zaposlenje.radno_mesto}}
                </div>
            </div>
        </div>
        <div v-else>
            Loading...mapState
        </div>
	</div>
</template>
  
  
<script>
    import Header from '@/components/Header.vue'
    import { mapActions } from 'vuex';

    export default {
        name: 'StudentView',
        components: {
            Header
        },
        data(){
            return{
                student: null,
            }
        },
        mounted(){
            this.getStudent(this.$route.params.id)
            .then( res => {
                this.student = res;
            });
        },
        methods: {
            ...mapActions([
            'getStudent'
            ])
        },
    }
</script>
  
  
<style scoped>
    .slika{
        float:left; margin-right:20px; margin-bottom:20px;
        width:200px;
    }  
    .student{
        text-align:left;
    }
    .info{
        overflow:auto;
    }
    .zaposlenje{
        margin-bottom:20px;
    }
    .zaposlenje .period{
        font-size: 80%;
    }
</style>

  