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
		<v-layout row wrap v-else>
			<v-flex>
				<v-card v-for="item in items" :key="item.id" class="secondary">
					<div class="margin">
					<v-container fluid>
						<v-layout row>
							<v-flex xs5>
								<v-img :src="item.imageUrl" height="100" contain></v-img>
							</v-flex>
							<v-flex>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0 white--text"> {{item.title}} </h3>
            <div> {{ item.date | date }} {{item.location}} </div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange" :to="'/news/' + item.id">Смотреть</v-btn>
      </v-card-actions>
    </v-flex>
						</v-layout>
					</v-container>
				</div>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>


<script>
	export default{
		data(){
			return{
				show: false
			}
		},
		computed:{
			isUserAutheticated(){
        return this.$store.getters.isUserAutheticated
      },
			items(){
            return this.$store.getters.loadedNews
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
	.margin{
		margin-top:10px;
	}
</style>