<template>
	<v-container>
		
			
			<div class="uk-child-width-1-2@s uk-grid-match" uk-grid>
    <div>
         <v-carousel style="cursor: pointer;">
    <v-carousel-item
      v-for="item in items"
      :key="item.id"
      :src="item.src"
      @click="LoadCourse(item.id)"
    >
    <center>
      <div class="title">{{item.title}}</div>
    </center>
    </v-carousel-item>
  </v-carousel>
    </div>
    <div>
      Add something here
		</div>
  </div>
	
</v-container>
</template>

<script>
export default {
    computed:{
     items(){
      return this.$store.getters.loadedCourses
     }
  },
    methods:{
      LoadCourse(id){
        return this.$router.push('/courses/' + id)
      }
    }
  }
</script>

<style scoped>
.title{
  position: absolute;
  bottom: 50px;
  background-color: rgba(0,0,0,0.5);
  color:white;
  font-size: 2em;
  padding: 30px;
}
</style>