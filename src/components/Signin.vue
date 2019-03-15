<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6>
            <v-card class="elevation-12">
              <v-toolbar dark color="secondary">
                <v-toolbar-title>Войти</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-alert
                 :value="error"
                 type="warning"
                  >
                 {{error}}
               </v-alert>
                <form @submit.prevent="signin" class="clearfix">
                  <v-text-field prepend-icon="person" name="login" label="Почта" type="email" required v-model="email" :rules="emailRules"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Пароль" type="password" required v-model="password" :rules="passwordRules"></v-text-field>
                  <v-btn style="float:right;" type="submit" color="secondary" :disabled="processing || !valid">Войти</v-btn>
                </form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>                
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data(){
      return{
         email: null,
         valid: true,
         password: null,
          emailRules:[
          (v) => !!v || 'Емайл быстроо',
          (v) => /^\w+([\.-]?\w+)*@\w+(\.\w{2,3})+$/.test(v) || 'Неправильная Почта'
         ],
         passwordRules:[
           (v) => !!v || 'Пароль нужен',
           (v) => (v && v.length >= 6) || 'Пароль Слишком короткий - минимум 6 символов'
         ]
      }
    },
    methods:{
       signin(){
        this.$store.dispatch('SIGNIN', {email: this.email, password: this.password})
       }
    }, 
    computed:{
      error(){
        return this.$store.getters.getError
      },
      processing(){
        return this.$store.getters.getProcessing
      },
      isUserAutheticated(){
        return this.$store.getters.isUserAutheticated
      }
    },
    watch:{
      isUserAutheticated(val){
        if(val === true)
          this.$router.push({ name: 'home' })
      }
    }
  }
</script>

<style scoped>
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
</style>