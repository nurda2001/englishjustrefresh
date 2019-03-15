<template>
	<v-container>
		<div class="uk-child-width-1-2@s uk-grid-match" uk-grid>
           <div>
           	<v-img :src="item.src"></v-img>
           </div>
           <div>
           	<h3 class="title">{{item.title}}</h3>
           	<p class="normal"> {{item.date}} </p>
           </div>
		</div>
		<div v-if="loading">
			 <center><h3 class="title" style="margin-bottom: 15px">Наши Результаты</h3></center> 
			 <div class="uk-child-width-1-2@s uk-grid-match" uk-grid>
			 <v-img src="https://instagram.fhel2-1.fna.fbcdn.net/vp/4c25ba928609cc0943892bab980354fa/5D079451/t51.2885-15/e35/45672809_2209538939268230_6348071293349058366_n.jpg?_nc_ht=instagram.fhel2-1.fna.fbcdn.net" height="400" contain></v-img>
			 <v-img src="https://instagram.fhel5-1.fna.fbcdn.net/vp/f839132401071f1e39f7dba2c7b242c4/5D079783/t51.2885-15/e35/46141877_186932155591277_6509963808199239068_n.jpg?_nc_ht=instagram.fhel5-1.fna.fbcdn.net" height="400" contain></v-img>
			 <v-img src="https://instagram.fhel5-1.fna.fbcdn.net/vp/8792b469ef4b5abdfc57e2a5651c3a99/5D1403AE/t51.2885-15/e35/45298695_264459637575778_3118709193057816908_n.jpg?_nc_ht=instagram.fhel5-1.fna.fbcdn.net" height="400" contain></v-img>
			 <v-img src="https://instagram.fhel5-1.fna.fbcdn.net/vp/aec2779fc7748e9b0e6990f57ac61ba0/5D20BB97/t51.2885-15/e35/45272131_336520173810834_8026041638802559279_n.jpg?_nc_ht=instagram.fhel5-1.fna.fbcdn.net" height="400" contain></v-img>
			</div>
   </div>
	</v-container>
</template>


<script>
	import VueInstagram from 'vue-instagram'
	export default{
	props: ['id'],
	components: {
    VueInstagram
  },
  data(){
    return{
      token: '1389524837.8675595.0270278cc00d42b9a9e2a7ca03e24f08',
      loading: false
    }
  },
	computed:{
     item(){
      return this.$store.getters.loadedCourse(this.id)
     }
   },
   mounted(){
     this.hello()
   },
   methods:{
   	 hello(){
   	     if(this.id === "ielts")
   	     	this.loading = true
   	 }
   }
}
</script>


<style scoped>
	.normal{
      font-size: 1.25em;
      padding:5px;
	}
</style>