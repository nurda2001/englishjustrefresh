<template>
	<v-container>
		<div class="uk-child-width-1-2@s uk-grid-match" uk-grid>
           <div>
           	<v-img :src="item.imageUrl"></v-img>
           </div>
           <div>
           	<v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h4 class="title">{{item.title}}</h4>
        <p>{{item.date | date}} {{ item.location}}</p>
        <p>{{item.description}}</p>
      </v-flex>
    </v-layout>
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