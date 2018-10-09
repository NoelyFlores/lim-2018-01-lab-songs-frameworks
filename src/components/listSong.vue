<template>
	<ul class="list-group">
		<li v-for="item in dataSong" :key="item.mbid" class="list-group-item d-flex justify-content-between align-items-center">
		  	  {{item.name}}
				<span class="badge ">
					<i @click="playcount(item.mbid, true)" class="material-icons playcount">favorite</i>
					<i @click="playcount(item.mbid, false)" class="material-icons down">thumb_down</i>
					<label for="">{{item.playcount?item.playcount:0}}</label>
				</span>
		</li>
	</ul>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import song from '@/components/listSong'
Vue.use(VueAxios, axios)
export default {
	name: 'song',
	props: ['artist'],
	data() {
		return {
			dataSong: []
		}
	},
	created () {
		this.connection()
	},
	watch: {
	},
	computed:{

	},
	methods:{
	  connection() {	
			axios
			.get(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${this.artist}&limit=10&api_key=ff73fed1db5752673e6039c8b6064fac&format=json`)
			.then(response => {
				const temp = []
				temp.push(response.data.topalbums.album)
				this.dataSong = temp[0]
				})
			.catch((e) => {
				console.log(e);				
			})		
		},
		playcount(id, option) {
			let listArtist = this.dataSong;				
			const songplaycount = listArtist.map(data => {
				if(data.mbid === id){
					if(data.hasOwnProperty('playcount')) {
						if(option === true){
							data.playcount += 1;	
						} else {
							if(data.playcount > 0) {
								data.playcount -= 1							
							}
						}
					} 
				}
				return data
			})
			this.dataSong = songplaycount.sort((before, after) => {				
				return after.playcount - before.playcount 
			})
		}		
	}
}
</script>
<style>
.playcount{
	color:#8bc34a;
}
.down{
	color: #00BCD4;
	}
.down, .playcount{
	cursor: pointer;
	padding: 0em .2em;
}
.carousel-control-next, .carousel-control-prev {
    position: absolute;
    top: -70% !important;
	width: 25% !important;
}
.list-group-item {
    background: #171717;
    border-color: #9e9e9e1c;
    font-weight: 100;
		color: #fff;		
    font-family: segoe UI;		
    padding: .5rem 1rem !important;
		text-align: left
}
.list-group{
		margin: 0% 25%;
	}
@media (max-width: 1200px) {
	.list-group{
		margin: 0% 20%;
	}
	.carousel-control-next, .carousel-control-prev{
		width: 20% !important;
	}
}
@media (max-width: 480px) {
	.list-group{
		margin: 0%;
	}
	.carousel-control-next, .carousel-control-prev{
		width: 15% !important;
	}
}
</style>
