<template>
	<div>
		<Header v-bind:title="headerTitle"/>
		<b-alert :variant="statusnaPorukaTip" :show="statusnaPoruka != null">
			{{ statusnaPoruka }}
		</b-alert>
		<div>
			<b-container fluid>
				<b-row>
					<b-col sm="3">
						<label for="ime">Ime</label>
					</b-col>
					<b-col sm="9">
						<b-form-input id="ime" :state="validnoIme" v-model="forma.ime"></b-form-input>
					</b-col>
				</b-row>
				<b-row>
					<b-col sm="3">
						<label>Prezime</label>
					</b-col>
					<b-col sm="9">
						<b-form-input id="prezime" :state="validnoPrezime" v-model="forma.prezime"></b-form-input>
					</b-col>
				</b-row>
				<b-row>
					<b-col sm="3">
						<label>Opisite koje podatke treba promeniti ili dodati</label>
					</b-col>
					<b-col sm="9">
						<b-form-textarea id="textarea" :state="validnaPrijava" v-model="forma.prijava" rows="4"></b-form-textarea>
					</b-col>
				</b-row>
			</b-container>
			<b-button @click="posalji()" variant="primary">Posalji</b-button>
		</div>
	</div>
</template>  
  
<script>
import Header from '@/components/Header.vue'

export default {
	name: 'App',
	components: {
		Header
	},
	data() {
		return {
			headerTitle: "Prijavi promenu podataka",
			statusnaPoruka: null,
			statusnaPorukaTip: null,
			forma: {
				ime: null,
				prezime: null,
				promena: null
			}
		}
	},
	computed: {
		validnoIme() {
			if (this.forma.ime == null) return null;
			else if (this.forma.ime.length > 2) return true
			else return false;
		},
		validnoPrezime() {
			if (this.forma.prezime == null) return null;
			else if (this.forma.prezime.length > 2) return true
			else return false;
		},
		validnaPrijava() {
			if (this.forma.prijava == null) return null;
			else if (this.forma.prijava.length > 2) return true
			else return false;
		}
	},

	methods: {
		posalji() {
			if (this.validnoIme && this.validnoPrezime && this.validnaPrijava) {
				fetch("http://alumni.raf.edu.rs/rs/api/prijava-promene", {
					headers: {
						'Content-Type': 'application/json'
					},
					method: "POST",
					body: JSON.stringify(this.forma)
				})
					.then(res => res.json())
					.then(res => {
						console.log(res);
						//proverimo sta smo dobili kao rezultat, pa postavimo status
						if (res.error) {
							this.statusnaPoruka = res.error;
							this.statusnaPorukaTip = 'danger';
						} else {
							//nemamo error polje, dakle sve je u redu
							this.statusnaPoruka = "Prijava za promenu podataka je uspesno poslata";
							this.statusnaPorukaTip = 'success';
						}
					});
			}
			else {
				return; //nista, forma nije validno popunjena
			}
		}
	}
}
</script>

  
  
  <style>
 
  </style>
  