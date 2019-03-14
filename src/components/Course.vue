<template>
	<v-container>
		<v-layout row wrap>
			<v-flex>
				<v-card>
					<v-card-title primary-title>
                               <div>
                               <h3 class="headline mb-0">{{ item.title }}</h3>
                           </div>
                       </v-card-title>
							<v-img :src="item.src"  contain></v-img>
                               <div class="normal"> {{ item.date }} </div>       
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>


<script>
	export default{
	props: ['id'],
	computed:{
     item(){
      return this.$store.getters.loadedCourse(this.id)
     }
   }
}
</script>


<style scoped>
	.normal{
      font-size: 1.25em;
	}
</style>