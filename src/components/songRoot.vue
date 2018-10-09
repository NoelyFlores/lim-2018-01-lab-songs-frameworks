<template>
	<div>
		<input @keyup.enter="sch()" v-model="txt" type="text" placeholder="Search you artist">
		<list-artist :searchArtist = search></list-artist>
	</div>
</template>
<script>
import artist from '@/components/listArtist'
export default {
	name: 'root',
	props: [],
	data() {
		return {
			search: '',
			txt: ''
		}
	},
	components: {'list-artist': artist},
	watch: {

	},
	computed:{

	},
	methods:{
		sch(){
			this.search = this.txt
		}
	}
}
</script>
<style>
.search{
	display: none;
}
@media(max-width: 480px){
	.search{
		display: inline;
		color: #fff;
	}
}

</style>
