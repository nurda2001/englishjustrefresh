<template>
	<v-container>
		<v-layout row wrap>
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
		computed:{
			items(){
            return this.$store.getters.loadedNews
		}
	}
	}
</script>


<style scoped>
	.margin{
		margin-top:10px;
	}
</style>