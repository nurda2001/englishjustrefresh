<template>
	<v-container>
		
			
			<div class="uk-child-width-1-2@s uk-grid-match" uk-grid>
    <div>
      <h4>Наши Курсы!</h4>
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
    <div class="right">
      <h4>Новости</h4>
      <v-flex xs12 class="test-xs-center" v-if="loading">
        <v-progress-circular indeterminate class="primary--text" :width="7" :size="70"></v-progress-circular>
      </v-flex>
      <v-carousel style="cursor: pointer;" v-if="!loading">
    <v-carousel-item
      v-for="novos in news"
      :key="novos.id"
      :src="novos.imageUrl"
      @click="LoadNew(novos.id)"
    >
    <center>
      <div class="title">{{novos.title}}</div>
    </center>
    </v-carousel-item>
  </v-carousel> 
		</div>
  </div>
	
</v-container>
</template>

<script>
export default {
    computed:{
     items(){
      return this.$store.getters.loadedCourses
     },
     news(){
      return this.$store.getters.loadedNews
     },
     loading(){
      return this.$store.getters.loading
     }
  },
    methods:{
      LoadCourse(id){
        return this.$router.push('/courses/' + id)
      },
      LoadNew(id){
        return this.$router.push('/news/' + id)
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
h4{
  font-size: 2.25em;

}
.right{
  text-align: right;
}
</style>