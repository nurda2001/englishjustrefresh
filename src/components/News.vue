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
			<v-container fluid>
					<v-layout row>
						<v-flex>
							<v-text-field label="Поиск Новостей" v-model="searchTerm"></v-text-field>
					</v-flex>
					</v-layout>
				</v-container>
			<v-flex>
				<v-card v-for="item in filteredBooks" :key="item.id" class="white">
					<div class="margin">
					<v-container fluid>
						<v-layout row>
							<v-flex xs5>
								<v-img :src="item.imageUrl" height="100" contain></v-img>
							</v-flex>
							<v-flex>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0 dark--text"> {{item.title}} </h3>
            <div> {{ item.date | date }} </div> <div class="orange--text"> {{item.location}} </div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn  color="orange" :to="'/news/' + item.id">Смотреть</v-btn>
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
				show: false,
				searchTerm: null,
			}
		},
		computed:{
			isUserAutheticated(){
        return this.$store.getters.isUserAutheticated
      },
			items(){
            return this.$store.getters.getNews
		},
		 
		loading(){
      return this.$store.getters.loading
     },
     filteredBooks(){
				let items = this.items
				if(this.searchTerm)
					items = items.filter(b => b.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >=0
						||  b.location.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >=0)
				return items
			},
	}
}
</script>


<style scoped>
	.margin{
		margin-top:10px;
	}
</style>