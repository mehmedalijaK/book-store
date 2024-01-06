<template>
	<div class="student">
		<img v-if="student.slika"
			:src="'http://alumni.raf.edu.rs/images/slike/' + student.slika" />
		<p v-else>Nema slike</p>

		<h3>{{ student.ime }} {{ student.prezime }}</h3>
	</div>
</template>
  
<script>
    export default {
        name: 'StudentSingle',  
        props: {
            student: Object
        }
    }
</script>

<style scoped>
.student{
    width:150px;
    display:inline-block;
    margin:10px;
    vertical-align: top;
}
.student img{
    width:150px;
    height:150px;
    object-fit:cover;
}
.student p{
    height:150px;
    margin:0;
    background-color:silver;
    text-align:center;
}
</style>



  