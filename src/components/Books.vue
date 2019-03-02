<template>
  <div>
   <center> 
     <div class="container">
      <div class="uk-light uk-background-secondary uk-padding">
        <vue-instagram :token="token" :count="18" class="columns is-multiline is-mobile">
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
  name: 'App',
 
  components: {
    VueInstagram
  },
  data(){
    return{
      token: '1389524837.8675595.0270278cc00d42b9a9e2a7ca03e24f08'
    }
  }

}
</script>