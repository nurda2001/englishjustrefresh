import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueInstagram from 'vue-instagram'
import DateFilter from './filter/date'
import firebaseConfig from './config/firebase'
import firebase from 'firebase'
import EditNewsDetails from './components/EditNewsDetails'
 
firebase.initializeApp(firebaseConfig)
Vue.use(VueInstagram), 
Vue.filter('date', DateFilter)
Vue.component('app-edit-news-detail', EditNewsDetails)

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created(){
  	let vm = this
  	firebase.auth().onAuthStateChanged(function(user) {
    vm.$store.dispatch('STATE_CHANGED', user)
                                       });
  	this.$store.dispatch('loadNews2')
           }
}).$mount('#app')
