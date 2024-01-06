<template>
	<div class="student">

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
</template>
  
  
<script>
    import Header from '@/components/Header.vue'

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
            let studentID = this.$route.params.id;
            fetch(`http://alumni.raf.edu.rs/rs/api/diplomac/${studentID}`)
            .then( res=>res.json() )
            .then( data=>{
                this.student = data;
            });
        }

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

  