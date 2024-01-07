<template>
    <div class="order">
      <Header :title="headerTitle" />
      <b-alert :variant="statusnaPorukaTip" :show="statusnaPoruka != null">
        {{ statusnaPoruka }}
      </b-alert>
      <div class="user-info">
			<b-container fluid>
				<b-row>
					<b-col sm="3">
						<label for="ime">Your name and surname</label>
					</b-col>
					<b-col sm="9">
						<b-form-input id="ime" :state="validnoImePrezime" v-model="forma.ime_prezime"></b-form-input>
					</b-col>
				</b-row>
				<b-row>
					<b-col sm="3">
						<label>Your address</label>
					</b-col>
					<b-col sm="9">
						<b-form-input id="prezime" :state="validnoAdresa" v-model="forma.adresa"></b-form-input>
					</b-col>
				</b-row>
				<b-row>
					<b-col sm="3">
						<label>Your phone number</label>
					</b-col>
					<b-col sm="9">
						<b-form-textarea id="textarea" :state="validnaBrojTelefona" v-model="forma.broj_telefona" rows="4"></b-form-textarea>
					</b-col>
				</b-row>
			</b-container>
        </div>
        <div class="user-order">
            <b-form-group label="Select Book">
            <b-form-select
                v-model="selectedBook"
                :options="bookOptions"
                class="mb-3"
            ></b-form-select>
            </b-form-group>

            <b-button @click="addBook" variant="success">Add Book</b-button>
    
            <b-table striped hover :items="selectedBooks" :fields="fields">
            <template #cell(quantity)="data">
                <b-form-input v-model="data.item.quantity" type="number" min="0"></b-form-input>
            </template>
            <template #cell(total)="data">
                {{ (data.item.cena * data.item.quantity).toFixed(2) }}
            </template>
            </b-table>
            <p>Total Amount: {{ totalAmount.toFixed(2) }}</p>
            <b-button @click="posalji" variant="primary">Send</b-button>
      </div>
    </div>
</template>

<script>
	import Header from '@/components/Header.vue'
	import { mapActions, mapState } from 'vuex';

	export default {
		name: "CreateOrderView",
		components: {
			Header
		},
		data() {
            return {
                headerTitle: "Create order",
                statusnaPoruka: null,
                statusnaPorukaTip: null,
                forma: {
                    ime: null,
                    prezime: null,
                    promena: null
                },
                selectedBook: null,
                selectedBooks: [],
            }
		},
        computed: {
            ...mapState([
                'knjige'
            ]),
            fields() {
                return [
                    { key: 'naziv', label: 'Naziv' },
                    { key: 'opis', label: 'Opis' },
                    { key: 'cena', label: 'Cena' },
                    { key: 'quantity', label: 'Quantity', sortable: true },
                    { key: 'total', label: 'Total' },  // New column for total cost
                ];
            },
            bookOptions() {
                return this.knjige ? this.knjige.map(book => ({
                value: book.id,
                text: book.naziv,
                })) : [];
            },
            totalAmount() {
                return this.selectedBooks.reduce((total, book) => total + (book.cena * book.quantity), 0);
            }
        },
		mounted() {
			this.fetchKnjige()
		},
		methods: {
			...mapActions([
				'fetchKnjige'
			]),
            addBook() {
                if (!this.selectedBook) return;

                const selectedBook = this.knjige.find(book => book.id === this.selectedBook);
                if (selectedBook) {
                    const existingBook = this.selectedBooks.find(book => book.id === selectedBook.id);

                    if (!existingBook) 
                        this.selectedBooks.push({ ...selectedBook, quantity: 1 });
                    
                }

                this.selectedBook = null;
            },
			posalji() {
				
			}
		}
	}
</script>


<style>
  .order {
    margin-left: 25%;
    margin-right: 25%;
  }
  .user-order {
    border: 1px solid #ccc; /* Add your desired border color */
    padding: 35px; /* Add padding for better visual appearance */
    margin-top: 50px 
  }

  .user-info {
    border: 1px solid #ccc; /* Add your desired border color */
    padding: 35px; /* Add padding for better visual appearance */
  }

  /* Add any additional styles if needed */
</style>