<template>
	<v-container>
		<div class="uk-child-width-1-2@s uk-grid-match" uk-grid>
           <div>
           	<v-img :src="item.imageUrl"></v-img>
           </div>
           <div>
           	<h3 class="title">{{item.title}}</h3>
           	<p class="normal"> {{item.date}} </p><br>
            <p class="normal"> {{item.description}} </p>
           </div>
		</div>
	</v-container>
</template>


<script>
	export default{
	props: ['id'],
	computed:{
     item(){
      return this.$store.getters.loadedNew(this.id)
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