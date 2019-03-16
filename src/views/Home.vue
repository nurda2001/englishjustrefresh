<template>
	<v-container>
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