<template>
	<ul>
		<div v-for="item in dataArtist" :key="item.mbid">
			<img :src="item.image[2][image]" alt="">
			<label id="song">{{item.name}}</label>
			<div>
				<list-song :artist = item.name></list-song>
			</div>

		</div>
	</ul>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import song from '@/components/listSong'
Vue.use(VueAxios, axios)
export default {
  name: "artist",
	props: [],
		components: {'list-song':song},
  data() {
    return {
			dataArtist: [],
			image: '#text',
			/* total: 0 */
		};
	},
	created () {
		this.conecction()		
/*     this.$root.$on('song-like', (val) => {
			//like
			//[{...},{...},{...}] 
			const listArtist = this.dataArtist;
			const newArray = listArtist.map(data => {
				console.log(data.mbid, val.id);				
				if(data.mbid === val.id){
					Object.defineProperty(data,'like',{value:1})
					console.log(data)
				}
			})
		})
		this.$root.$on('song-down', (val) => {
			//dislike 
		}) */
	},
  watch: {},
  computed: {},
  methods: {
		conecction() {		
			axios
			.get('http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&limit=5&api_key=ff73fed1db5752673e6039c8b6064fac&format=json')
			.then(response => {
				const temp = []
				temp.push(response.data.topartists.artist)
				this.dataArtist = temp[0]
				})
			.catch(console.log('fallo'))		
		}

	}
};
</script>
<style>
	#song {
		color: #fff;
    font-family: cursive;
    font-size: 16px;
	}
</style>
