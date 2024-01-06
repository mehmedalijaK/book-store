<template>
	<div>
		<Header title="Kompanije u kojima rade naši diplomci"/>
		<b-pagination
			v-model="currentPage"
			:total-rows="rows"
			:per-page="perPage"
			aria-controls="tabelaKompanije"
		></b-pagination>
		<b-table
			striped
			hover
			:items="kompanije"
			:fields="fields"    
			:per-page="perPage"
			:current-page="currentPage"
			id="tabelaKompanije">
			<template #cell(logo)="data">
				<img v-if="data.value" :src="`${data.value}`" />
			</template>
		</b-table>
	</div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
	name: 'CompanyView',
	components: {
		Header
	},
	data() {
		return {
			kompanije: null,
			perPage: 10,
			currentPage: 1,
			fields: [
				{
					key: "naziv",
					sortable: true,
					label: "Kompanija"
				},
				{
					key: "logo",
					label: "",
					formatter: value => {
						if (value)
							return "http://alumni.raf.edu.rs/images/kompanije/" + value;
						else return null;
					}
				},
			],
            computed: {
                rows() {
                    return this.kompanije.length;
                }
            },
		};
	},
	mounted() {
		fetch(`http://alumni.raf.edu.rs/rs/api/kompanije`)
			.then(res => res.json())
			.then(data => {
				this.kompanije = data;
			});
	}
};
</script>


<style scoped>
    .table{
    text-align:left;
    }

</style>