<template>
	<div>
		<list-artist></list-artist>
	</div>
</template>
<script>
import artist from '@/components/listArtist'
export default {
	name: 'root',
	props: [],
	data() {
		return {

		}
	},
	components: {'list-artist': artist},
	watch: {

	},
	computed:{

	},
	methods:{

	}
}
</script>
<style>

</style>
