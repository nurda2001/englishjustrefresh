<template>
  <div class="container">
   <center> 
    
    <div   class="uk-child-width-1-2@s uk-grid" uk-grid="">
     <div  class="container">
        <vue-instagram :token="token" :count="21"  class="columns is-multiline is-mobile" mediaType="image"  >
          <template slot="feeds" slot-scope="props">
            <div class="column is-4-desktop is-6-tablet is-6-mobile">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-square">
                    <img :src="props.feed.images.low_resolution.url" alt="Image">
                  </figure>
                </div>
              </div>
           </div>
         </template>
       </vue-instagram>
       <a class="uk-button uk-button-default" href="https://www.instagram.com/english.zvezda.aktau/?hl=ru">Увидеть больше</a>
   </div>
 </div>
 </center>
 </div>
</template>

 
<script>
import VueInstagram from 'vue-instagram'
 
export default {
 
  components: {
    VueInstagram
  },
  data(){
    return{
      token: '1389524837.8deb35d.b89e0b2d9b8e4a60b9a19fa04615d841',
      loading: true
    }
  },
  methods:{
       showToggle(){
       setTimeout(() =>{
        this.loading = false
       }, 2000)
     }
  },
  mounted(){
    this.showToggle()
  }

}
</script>



<style scoped>
.centersp{
  margin:50%;


}

  
</style>