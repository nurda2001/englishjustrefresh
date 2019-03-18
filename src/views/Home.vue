<template>
	<v-container>
         <!--<v-carousel style="cursor: pointer;">
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
  </v-carousel> -->
    <!--<center><div class="uk-card uk-card-default uk-card-body" style="z-index: 1; height: 150px;" uk-sticky="offset: 65; bottom: #top; media:900"> <a href="First" uk-scroll><v-btn class="secondary">Подготовка к Ielts</v-btn> </a> <a href="#Second" uk-scroll><v-btn class="secondary"> Персональные Курсы </v-btn></a> <a href="#Third" uk-scroll> <v-btn class="secondary"> Английский для детей </v-btn></a> <a href="#Fourth" uk-scroll><v-btn class="secondary"> Турецкий и Китайский язык </v-btn></a></div></center>
    <div id="Ielts">
      <v-container>
    <div class="uk-child-width-1-2@s uk-grid-match" uk-grid>
           <div>
            <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      contain
    ></v-carousel-item>
  </v-carousel>
           </div>
           <div>
            <h3 class="title">Подготовка к Ielts</h3>
            <p class="normal"> IELTS (International English Language Testing System) — международное система тестирования по английскому языку. Этот тест позволяет определить уровень владения английским языком у людей, для которых он не является родным. Обычно этот тест проходят те, кто собирается эмигрировать, проходить практику или учиться в англоязычной среде. </p>
           </div>
    </div>
 </v-container>
</div>
<div class="empty" id="Second">
  
</div>
      <v-container>
    <div class="uk-child-width-1-2@s uk-grid-match" uk-grid>
           <div>
            <v-img src="https://chelseakrost.com/wp-content/uploads/2014/11/Personal-Branding-2.png" ></v-img>
           </div>
           <div>
            <h3 class="title">Персональные Курсы</h3>
            <p class="normal"> 1.Индивидуальные курсы-это уникальный подход к каждому студенту нашего центра. <br>
2.Преимущества индивидуальных уроков в том, что вы можете сами контролировать скорость процесса обучения. <br>
3.Это эксклюзивное время выделенное именно для вас. <br>
Программа будет полезной как для практикующих бухгалтеров, так и для студентов, изучающих бухгалтерию. Изучив этот курс, вы сможете самостоятельно заполнять отчётную документацию на английском языке, вести деловую переписку, готовить и презентовать отчёты по деятельности компании и др. Ждем вас в нашем центре в городе Актау. </p>
           </div>
    </div>
  </v-container>

<div class="empty" id="Third">
  
</div>

   <div>
      <v-container>
    <div class="uk-child-width-1-2@s uk-grid-match" uk-grid>
           <div>
            <v-carousel>
    <v-carousel-item
      v-for="(kids,i) in kphotos"
      :key="i"
      :src="kids.src"
      contain
    ></v-carousel-item>
  </v-carousel>
           </div>
           <div>
            <h3 class="title">Английский для детей</h3>
            <p class="normal"> С каждым годом становится все очевиднее снижение возраста начала обучения английскому языку — или«ранний старт»*. Раннее обучение отвечает потребности взрослых, желающих, чтобы их дети как можно более качественно знали иностранный язык. Начинать учить иностранный язык в детстве гораздо легче: ребенок способен больше запоминать и лучше воспринимать. Посещая курсы английского для детей, ребенок избавляется от многих трудностей, с которыми сталкиваются при изучении языка взрослые. При этом, занятия у нас для детей увлекательные, что только способствует их эффективности.</p>
           </div>
    </div>
  </v-container>
  </div>

<div class="empty">
  
</div>

<div id="Fourth">
      <v-container>
    <div class="uk-child-width-1-2@s uk-grid-match" uk-grid>
           <div>
            <v-img src="https://www.propertyturkey.com/uploads/pages/larg/turkey-and-china.jpg" class="hidden-sm-and-down"></v-img>
           </div>
           <div>
            <h3 class="title">Турецкий и Китайский языки</h3>
            <p class="normal"> Являясь мостом между Европой и Ближним Востоком, Турция и турецкий язык издревне привлекали внимание людей из разных частей света. На сегодняшний день, в среднем, около 100 млн. человек говорят на турецком языке. И вы можете стать одним из них, мы даем вам такую возможность. А изучив турецкий язык, вы откроете для себя дополнительные возможности в областях бизнеса, учебы, науки, туризма и др.   Китайский язык входит в китайско-тибетскую (сино-тибетскую) языковую семью. Будучи официальным языком КНР, Тайваня и Сингапура, он также распространен в Индонезии, Камбодже, Лаосе, Вьетнаме, Мьянме, Малайзии, Таиланде и других странах. В общей сложности на нем говорят свыше 1 миллиарда человек. Китайский язык является одним из официальных и рабочих языков ООН. В китайском языке выделяется 7 диалектных групп: северная (北, самая многочисленная — свыше 800 миллионов говорящих), у (吴), сян (湘), гань (赣), хакка (客家), юэ (粤), минь (闽). </p>
           </div>
    </div>-->


    <layout row>

      <ul uk-tab>
    <li><a flat  class="gradientText device" >Подготовка к Ielts</a></li>
    <li><a flat  class="gradientText device" >Персональные Курсы</a></li>
    <li><a flat  class="gradientText device" >Английский для детей</a></li>
    <li><a flat  class="gradientText device" >Турецкий и Китайский язык</a></li>
       </ul>


      <ul class="uk-switcher uk-margin">
      <li>

       <transition name="fade">
      <div class="uk-child-width-1-2@s uk-grid-match" uk-grid>
           <div>
            <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      contain
    ></v-carousel-item>
  </v-carousel>
           </div>
           <div>
            <h3 class="title">Подготовка к Ielts</h3>
            <p class="normal"> IELTS (International English Language Testing System) — международное система тестирования по английскому языку. Этот тест позволяет определить уровень владения английским языком у людей, для которых он не является родным. Обычно этот тест проходят те, кто собирается эмигрировать, проходить практику или учиться в англоязычной среде. </p>
           </div>
    </div>
      
    </transition>


    </li>



      <li>


      <div class="uk-child-width-1-2@s uk-grid-match" uk-grid>
           <div>
            <v-img src="https://chelseakrost.com/wp-content/uploads/2014/11/Personal-Branding-2.png" ></v-img>
           </div>
           <div>
            <h3 class="title">Персональные Курсы</h3>
            <p class="normal"> 1.Индивидуальные курсы-это уникальный подход к каждому студенту нашего центра. <br>
2.Преимущества индивидуальных уроков в том, что вы можете сами контролировать скорость процесса обучения. <br>
3.Это эксклюзивное время выделенное именно для вас. <br>
Программа будет полезной как для практикующих бухгалтеров, так и для студентов, изучающих бухгалтерию. Изучив этот курс, вы сможете самостоятельно заполнять отчётную документацию на английском языке, вести деловую переписку, готовить и презентовать отчёты по деятельности компании и др. Ждем вас в нашем центре в городе Актау. </p>
           </div>
    </div>


    </li>



      <li>
      

       <div class="uk-child-width-1-2@s uk-grid-match" uk-grid>
           <div>
            <v-carousel>
    <v-carousel-item
      v-for="(kids,i) in kphotos"
      :key="i"
      :src="kids.src"
      contain
    ></v-carousel-item>
  </v-carousel>
           </div>
           <div>
            <h3 class="title">Английский для детей</h3>
            <p class="normal"> С каждым годом становится все очевиднее снижение возраста начала обучения английскому языку — или«ранний старт»*. Раннее обучение отвечает потребности взрослых, желающих, чтобы их дети как можно более качественно знали иностранный язык. Начинать учить иностранный язык в детстве гораздо легче: ребенок способен больше запоминать и лучше воспринимать. Посещая курсы английского для детей, ребенок избавляется от многих трудностей, с которыми сталкиваются при изучении языка взрослые. При этом, занятия у нас для детей увлекательные, что только способствует их эффективности.</p>
           </div>
    </div>

    </li>




    <li>
      

<div class="uk-child-width-1-2@s uk-grid-match" uk-grid>
           <div>
            <v-img src="https://www.propertyturkey.com/uploads/pages/larg/turkey-and-china.jpg" class="hidden-sm-and-down"></v-img>
           </div>
           <div>
            <h3 class="title">Турецкий и Китайский языки</h3>
            <p class="normal"> Являясь мостом между Европой и Ближним Востоком, Турция и турецкий язык издревне привлекали внимание людей из разных частей света. На сегодняшний день, в среднем, около 100 млн. человек говорят на турецком языке. И вы можете стать одним из них, мы даем вам такую возможность. А изучив турецкий язык, вы откроете для себя дополнительные возможности в областях бизнеса, учебы, науки, туризма и др.   Китайский язык входит в китайско-тибетскую (сино-тибетскую) языковую семью. Будучи официальным языком КНР, Тайваня и Сингапура, он также распространен в Индонезии, Камбодже, Лаосе, Вьетнаме, Мьянме, Малайзии, Таиланде и других странах. В общей сложности на нем говорят свыше 1 миллиарда человек. Китайский язык является одним из официальных и рабочих языков ООН. В китайском языке выделяется 7 диалектных групп: северная (北, самая многочисленная — свыше 800 миллионов говорящих), у (吴), сян (湘), гань (赣), хакка (客家), юэ (粤), минь (闽). </p>
           </div>
    </div>



    </li>
     </ul>
     
    </layout>
 


</v-container>
</template>

<script>
export default {
  data(){
    return{
      name: 'Hello World',
      name2: 'Hello World 2',
      show: false,
      show2: false,
        items: [
          {
            src: 'https://instagram.fhel2-1.fna.fbcdn.net/vp/4c25ba928609cc0943892bab980354fa/5D079451/t51.2885-15/e35/45672809_2209538939268230_6348071293349058366_n.jpg?_nc_ht=instagram.fhel2-1.fna.fbcdn.net'
          },
          {
            src: 'https://instagram.fhel5-1.fna.fbcdn.net/vp/f839132401071f1e39f7dba2c7b242c4/5D079783/t51.2885-15/e35/46141877_186932155591277_6509963808199239068_n.jpg?_nc_ht=instagram.fhel5-1.fna.fbcdn.net'
          },
          {
            src: 'https://instagram.fhel5-1.fna.fbcdn.net/vp/8792b469ef4b5abdfc57e2a5651c3a99/5D1403AE/t51.2885-15/e35/45298695_264459637575778_3118709193057816908_n.jpg?_nc_ht=instagram.fhel5-1.fna.fbcdn.net'
          },
          {
            src: 'https://instagram.fhel5-1.fna.fbcdn.net/vp/aec2779fc7748e9b0e6990f57ac61ba0/5D20BB97/t51.2885-15/e35/45272131_336520173810834_8026041638802559279_n.jpg?_nc_ht=instagram.fhel5-1.fna.fbcdn.net'
          }
        ],
        kphotos:[
        {
            src: 'http://englishinaktau.kz/img/Kids.jpg'
          },
          {
            src: 'http://englishinaktau.kz/img/Kids-2.jpg'
          },
          {
            src: 'http://englishinaktau.kz/img/Kids-1.jpg'
          }
        ]
      }
  },
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

h4{
  font-size: 2.25em;

}
.right{
  text-align: right;
}
.tooltip {
 width: 200px;
 position: fixed;
 top:auto;
 bottom:0px;
 right:0px;
 left:auto;
}
.special{
  position: fixed;
}
.normal{
      font-size: 1.25em;
      padding:5px;
  }
  .empty{
    height: 200px;
  }
  .gradientText {
    position: relative;
    color: transparent;
    transition-duration: 0.3s;
    background: linear-gradient(to right, #13f3b9 0%, #5878F3 50%, transparent 50%) 100% 0 / 200% 200% #474E51;
    background-clip: text;
}

.gradientText:hover {
    background-position: 0 0;
}
@media (min-width: 1281px) {
  
  .device{
    font-size: 1.2em;
  }
}

/* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {
  
  .device{
    font-size: 1em;
  }
}

/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {
  
  .device{
    font-size: 0.8em;
  }
}

/* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  
  .device{
    font-size: 0.6em;
  }
}

/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
  
  .device{
    font-size: 0.4em;
  }
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  
  .device{
    font-size: 0.2em;
  }
}

</style>