import Vue from 'vue'
import Vuex from 'vuex'
import generalModule from './store/general'
import userModule from './store/user'

Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
   userModule,
   generalModule},

  state: {
      loadedCourses: [
      {
            id: 'ielts',
            id2:'photos',
            src: 'https://is5-ssl.mzstatic.com/image/thumb/Purple124/v4/87/08/54/87085448-f6d6-80d6-c1f6-1a0e1df1f5c9/AppIcon-0-1x_U007emarketing-0-0-85-220-0-7.png/1200x630wa.png',
            title: 'Подготовка к Ielts',
            date: 'IELTS (International English Language Testing System) — международное система тестирования по английскому языку. Этот тест позволяет определить уровень владения английским языком у людей, для которых он не является родным. Обычно этот тест проходят те, кто собирается эмигрировать, проходить практику или учиться в англоязычной среде.'
          },
          {
            id: 'personal',
            src: 'https://www.dragoncareers.com/wp-content/uploads/2016/09/Dont-take-it-personal.png',
            title: 'Персональные Курсы',
            date: 'Программа будет полезной как для практикующих бухгалтеров, так и для студентов, изучающих бухгалтерию. Изучив этот курс, вы сможете самостоятельно заполнять отчётную документацию на английском языке, вести деловую переписку, готовить и презентовать отчёты по деятельности компании и др. Ждем вас в нашем центре в городе Актау.'
          },
          {
            id:'kids',
            src: 'http://www.vanaz.org/files/586/Image/kids.png',
            title: 'Английский для детей',
            date: 'С каждым годом становится все очевиднее снижение возраста начала обучения английскому языку — или«ранний старт»*. Раннее обучение отвечает потребности взрослых, желающих, чтобы их дети как можно более качественно знали иностранный язык. Начинать учить иностранный язык в детстве гораздо легче: ребенок способен больше запоминать и лучше воспринимать. Посещая курсы английского для детей, ребенок избавляется от многих трудностей, с которыми сталкиваются при изучении языка взрослые. При этом, занятия у нас для детей увлекательные, что только способствует их эффективности.'
          },
          {
            id: 'otherlanguages',
            src: 'https://www.propertyturkey.com/uploads/pages/larg/turkey-and-china.jpg',
            title: 'Турецкий и Китайский Язык',
            date: 'Являясь мостом между Европой и Ближним Востоком, Турция и турецкий язык издревне привлекали внимание людей из разных частей света. На сегодняшний день, в среднем, около 100 млн. человек говорят на турецком языке. И вы можете стать одним из них, мы даем вам такую возможность. А изучив турецкий язык, вы откроете для себя дополнительные возможности в областях бизнеса, учебы, науки, туризма и др.   Китайский язык входит в китайско-тибетскую (сино-тибетскую) языковую семью. Будучи официальным языком КНР, Тайваня и Сингапура, он также распространен в Индонезии, Камбодже, Лаосе, Вьетнаме, Мьянме, Малайзии, Таиланде и других странах. В общей сложности на нем говорят свыше 1 миллиарда человек. Китайский язык является одним из официальных и рабочих языков ООН. В китайском языке выделяется 7 диалектных групп: северная (北, самая многочисленная — свыше 800 миллионов говорящих), у (吴), сян (湘), гань (赣), хакка (客家), юэ (粤), минь (闽).'
          }
      ],
      loadedNews:[
      {
            id: 'news1',
            imageUrl: 'https://i.pinimg.com/originals/f2/e0/47/f2e047de368acedbffc3ffc012992ac0.jpg',
            title: 'Новость дня',
            description: 'asdsad'
          },
          {
            id: 'new2',
            imageUrl: 'https://images5.alphacoders.com/609/thumb-1920-609173.jpg',
            title: 'Прикол',
            description: 'asdsad'
          }
      ],
      user:{
      	id: 'sadasdad',
      	registeredCourse: ['fdwfewfpi']
      }
  },
  mutations: {
   createNews(state, payload){
   	state.loadedNews.push(payload)
   }
  },
  actions: {
  	loadNews ({commit}){
  		firebase.database().ref('news').once('value')
  	},
   createNews ({commit, getters}, payload){
     const news = {
     	title: payload.title,
     	location: payload.location,
     	imageUrl: payload.imageUrl,
     	description: payload.description,
     	date: payload.date.toISOString(),
     }
     firebase.database().ref('news').push(news)
     .then((data) => {
     	const key = data.key
     	commit('createNews', {
     		...news, 
     		id: key
     	})
     }) 
     .catch((error) => {
     	console.log(error)
     })
   }
  },
  getters: {
  	loadedCourses (state) {
  		return state.loadedCourses.sort((courseA, courseB) => {
  			return courseA.date > courseB.date
  		})
  	},
  	loadedCourse (state) {
  		return (courseId) => {
  			return state.loadedCourses.find((course) => {
  				return course.id === courseId
  			})
  		}
  	},
  	loadedNews (state) {
  		return state.loadedNews.sort((newsA, newsB) => {
  			return newsA.date > newsB.date
  		})
  	},
  	loadedNew (state) {
  		return (newId) => {
  			return state.loadedNews.find((news) => {
  				return news.id === newId
  			})
  		}
  	}	
}
})
