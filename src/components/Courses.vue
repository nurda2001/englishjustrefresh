<template>
	<v-container>
		<v-layout row wrap>
			<v-flex>
				<v-card v-for="item in items" :key="item.id">
					<v-container fluid>
						<v-layout row>
							<v-flex xs5>
								<v-img :src="item.src"></v-img>
							</v-flex>
							<v-flex>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0"> {{item.title}} </h3>
            <div> {{ item.date }} </div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange" :to="'/courses/' + item.id">Смотреть</v-btn>
      </v-card-actions>
    </v-flex>
						</v-layout>
					</v-container>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>


<script>
	export default{
		computed:{
			items(){
            return this.$store.getters.loadedCourses
		}
	}
	}
</script>


<style>
	
</style>