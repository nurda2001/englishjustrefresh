<template>
  <div>
   <center> 
     <div class="container">
        <vue-instagram :token="token" :count="20" class="columns is-multiline is-mobile">
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
     </div>
   <v-btn>Press</v-btn>
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
      token: '3132201343.f88d3a0.37e01f1cb6554b83b0efd37dd59417de'
    }
  }

}
</script>