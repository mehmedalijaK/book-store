<template>
	<div class="header">
		<template>
			<div>
				<StudentSingle v-for="student in studenti" 
					:key="student.id" :student="student"/>
			</div>
		</template>
	</div>
</template>

  
<script>
    import StudentSingle from '@/components/StudentSingle.vue';
    export default {
        name: 'StudentiList',


        components: {
            StudentSingle
        },


        data() {
            return {
                studenti: []
            }
        },
        watch: {
        studentiIDs(nVal) {
            this.studenti = [];
            nVal.map( obj => {
                fetch(`http://alumni.raf.edu.rs/rs/api/diplomac/${obj.id}`)
                    .then( obj => obj.json())
                    .then( res => this.studenti.push(res));
            });
            }
        },

        props: {
            studentiIDs: Array
        },
        
        mounted() {
        this.studentiIDs.map( obj => {
            fetch(`http://alumni.raf.edu.rs/rs/api/diplomac/${obj.id}`)
                .then( obj => obj.json())
                .then( res => this.studenti.push(res));
        });
        
    },

    }
    

</script>

<style scoped>
.header{
  font-family: 'Gloock', serif;
  text-align: center;
}
</style>


  