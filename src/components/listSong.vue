<template>
	<ul class="collapsible">
		<li v-for="item in dataSong" :key="item.mbid">
			<div class="collapsible-header">
      	  {{item.name}}
				<span class="badge">
					<i @click="like(item.mbid, true)" class="material-icons like">favorite</i>
					<i @click="like(item.mbid, false)" class="material-icons down">thumb_down</i>
					<label for="">{{item.like?item.like:0}}</label>
				</span>
			</div>
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
			dataTemp: [],
			dataSong: []
		}
	},
	created () {
		this.connection()
	},
	watch: {
	/* 	dataSong: function() {
			this.dataSong = this.dataOrder
			} */
	},
	computed:{
/* 		dataOrder: {
			get: function() {
			  return this.order()
			}
		} */
	},
	methods:{
	  connection() {	
			axios
			.get(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${this.artist}&limit=10&api_key=ff73fed1db5752673e6039c8b6064fac&format=json`)
			.then(response => {
				const temp = []
				temp.push(response.data.topalbums.album)
				this.dataSong = temp[0]
				})
			.catch((e) => {
				console.log(e);				
			})		
		},
		like(id, option) {
			let listArtist = this.dataSong;				
			const songLike = listArtist.map(data => {
				if(data.mbid === id){
					if(data.hasOwnProperty('like')) {
						if(option === true){
							data.like += 1;	
						} else {
							if(data.like > 0) {
								data.like -= 1							
							}
						}
					}else{
						Object.defineProperty(data,'like',{value:1, writable:true, enumerable:true})
					} 
				}else{
					data.like?data.like:Object.defineProperty(data,'like',{value:0, writable:true, enumerable:true})
				}
				return data
			})
			this.dataSong = songLike.sort((before, after) => {				
				return after.like - before.like 
			})
		}		
	}
}
</script>
<style>
.like{
	color:#8bc34a;
	cursor: pointer;
}
.down{
	color: #00BCD4;
	cursor: pointer;
}
</style>
