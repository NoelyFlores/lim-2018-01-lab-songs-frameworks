<template>
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
	<div class="carousel-inner">
		<div class="carousel-item active" v-bind:class="{'active':statePrev}">
			<div class="one">
				<h3 class="description">Top Song Ranking</h3>
				<p>{{messag}}</p>
			</div>      
		</div>		
		<div v-for="item in dataArtist" :key="item.mbid" class="carousel-item">
				<img :src="item.image[2]['#text']"   alt="">
				<label id="song">{{item.name}}</label>
				<div>
					<list-song :artist = item.name></list-song>
				</div>
		</div>
	</div>
		<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    	<span class="carousel-control-prev-icon" aria-hidden="true"></span>
    	<span class="sr-only">Previous</span>
  	</a>
  	<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    	<span class="carousel-control-next-icon" aria-hidden="true"></span>
    	<span class="sr-only">Next</span>
  	</a>
</div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import song from '@/components/listSong'
Vue.use(VueAxios, axios)
export default {
  name: "artist",
	props: ['searchArtist'],
	components: {'list-song':song},
  data() {
    return {
			dataArtist: [],
			statePrev:false,
			messag:''
		};
	},
	created () {
		this.conecction()		

	},
  watch: {
    searchArtist: function (newQuestion) {
			if(this.searchArtist !== ''){
				this.statePrev = true
				this.searchList()				
			}else{
				this.statePrev = false
				this.conecction()
			}
    }
	},
  computed: {
	},
  methods: {
		conecction() {		
			axios
			.get('https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&limit=5&api_key=ff73fed1db5752673e6039c8b6064fac&format=json')
			.then(response => {
				const temp = []
				temp.push(response.data.topartists.artist)
				this.dataArtist = temp[0]
				})
			.catch(console.log('fallo'))		
		},
 		searchList(){
			axios
			.get(`https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${this.searchArtist}&limit=1&api_key=ff73fed1db5752673e6039c8b6064fac&format=json`)
			.then(response => {
				const temp = []
				temp.push(response.data.results.artistmatches.artist)
				this.dataArtist = temp[0]
				})
			.catch((e)=>{
				this.statePrev = true
			}
				
			)	
			}
	}
};
</script>
<style>
.one{
	background: url(https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) center no-repeat;
  background-size: cover;
  width: 100%;
  height: 678px;
}
	#song {
		color: #00bcd4;
    font-family: segoe UI;
    font-size: 20px;
    display: block;
    padding: 1em !important;
    text-transform: uppercase;
	}
	.badge {
    display: flex;
}
label {
    margin: auto !important;
    padding: 0em 0em 0em .5em !important;
    font-size: 16px !important;
    font-weight: 100 !important;
}
.description {
  position: absolute;
  color: #CDDC39;
  text-align: center;
  padding: 4em;
  margin-top: 7em;
  width: 100%;
  background: #30a8b769;
}
@media (max-width: 480px) {
	.one{
	background: url(https://images.pexels.com/photos/65718/pexels-photo-65718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) center no-repeat;
  height: 590px;
	background-size: cover;
}
.description {
  margin-top: 5em;
}
}
</style>
