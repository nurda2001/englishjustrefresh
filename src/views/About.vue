<template>
  <div class="container">
  	<center>
  		<span v-if="loading"  uk-spinner="ratio: 4.5"></span>
  		<div v-else>
  		<h1 class="title">О нас</h1>
<div class="uk-child-width-1-2@s uk-grid-match" uk-grid>
  			    <div>
       <div class="uk-card uk-card-default uk-card-hover uk-card-body">
            <video src="http://www.englishinaktau.kz/video/video.mp4" loop="" playsinline="" uk-video="autoplay: inview" controls="controls" preload="none"></video>
        </div>
             </div>
             <div>
       <div class="uk-card uk-card-default uk-card-hover uk-card-body">
            <p class="is-size-5">
                Opportunity —Эффективные разговорные курсы английского языка для взрослых, студентов и школьников.
Удобный и доступный центр английского языка в Актау и Мангийстауской области. C 2014 года мы предоставляем услуги обучения английскому языку для частных клиентов и организации любого размера.
Наша гордость — отличный преподавательский состав.  Мы готовы утверждать, что преподаватели  языкового центра «Opportunity» устроят самых взыскательных клиентов.  Преподаватели — главное в нашем деле.
Наша цель — дать качественные услуги по цене, доступной широкой аудитории. На нашем рынке существуют и более известные и крупные школы иностранных языков. Но именно мы — лучший выбор, когда доходит до сопоставления цены и качества услуг, сравнения квалификации преподавателей. Нам приятно, что наши школы рекомендуют друзьям и коллегам.
              </p>
     <hr>
              <div class="uk-alert-primary uk-alert" uk-alert="">
    <h4>Не забываем</h4><br>
<p>Качество ваших знаний и итоговый уровень языка по окончании учебной программы - наш безусловный приоритет.</p>
</div>
        </div>
             </div>
</div>
</div>
</center>
</div>
</template>

<script>
	export default{
 data(){
    return{
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
</style>
