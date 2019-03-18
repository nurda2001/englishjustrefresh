<template>
	<v-container>
    <v-layout row wrap v-if="loading">
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
        indeterminate
        class="secondary--text"
        :width="7"
        :size="70"></v-progress-circular>
      </v-flex>
    </v-layout>
		<div class="uk-child-width-1-2@s uk-grid-match" uk-grid v-else>
           <div>
           	<v-img :src="item.imageUrl"></v-img>
           </div>
           <div>
           	<v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h4 class="title">{{item.title}}</h4><template v-if="show">
              <app-edit-news-detail :news="item"></app-edit-news-detail>

            </template>
            
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
    data(){
      return{
         show: false
      }
    },
	props: ['id'],
	computed:{
     item(){
      return this.$store.getters.loadedNew(this.id)
     },
     isUserAutheticated(){
        return this.$store.getters.isUserAutheticated
      },
       loading(){
      return this.$store.getters.loading
     }
   },
   watch:{
      isUserAutheticated(val){
        if(val === true)
          this.show = true
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