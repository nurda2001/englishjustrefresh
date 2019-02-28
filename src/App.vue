<template>
  <v-app>
    <div>
<app-header></app-header>

<app-footer></app-footer>
 <v-content>
    <router-view/>
</v-content>
</div>
  </v-app>
</template>


<script>
  import AppHeader from '@/components/AppHeader'
  import AppFooter from '@/components/AppFooter'
  export default{
    components:{
      AppHeader, AppFooter
    }
  }
</script>
<style scoped>

</style>