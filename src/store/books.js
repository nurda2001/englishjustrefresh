export default{
state: {
     books:[
        {
        	id: 'sadasdasdasdasd',
        	title: '11.1A Компьютерные Системы',
        	description: ' 1.Категории ПО 2.Операционные системы 3.Архитектура Фон-Неймана 4.Виды памяти 5.Булева алгебра',
        	imageId: 'dsadasdsadasda',
        	parts: 7,
        	level: ['А-Level', 'C1'],
        	rating: 4,
        	ratingsCount: 100,
        	youtube_playlist_id: 'sadasdasda'
        },
        {
        	id: 'sadasdasdasdasdad',
        	title: '11.1В Парадигмы программирования',
        	description: '1.Классификации и категории языков программирования 2.Трансляторы',
        	imageId: 'dsadasdsadasda',
        	parts: 7,
        	level: ['А-Level', 'B1'],
        	rating: 3.5,
        	ratingsCount: 55,
        	youtube_playlist_id: 'sasdadasdasda'
        },
        {
        	id: 'sadsadasdasfdsddasdasdasdasd',
        	title: '11.1С Жизненный цикл системы',
        	description: '1.Этапы жизненного цикла системы 2.Модели жизненного цикла 3.Анализ данных 4.Диаграммы потоков данных 5.Блок-схемы процессов',
        	imageId: 'dsadasaddsasdsadasda',
        	parts: 7,
        	level: ['А-Level'],
        	rating: 4.5,
        	ratingsCount: 102,
        	youtube_playlist_id: 'sadasdasdasdasda'
        },
        {
        	id: 'sadsadasdasasdasdfdsdasdasdasd',
        	title: '11.2А Информационные системы',
        	description: '1.Базы данных 2.Нормализация 3.Диаграммы «сущность-связь» 4.Язык SQL запросов',
        	imageId: 'dsadasaddsasdsadasda',
        	parts: 7,
        	level: ['А-Level'],
        	rating: 1.5,
        	ratingsCount: 187,
        	youtube_playlist_id: 'sadasdadsadasdasdasda'
        }
     ]
  },
  mutations: {
    SET_BOOKS(state, payload){
      state.books = payload
    }
  }, 
  getters:{
  	getBooks: (state) => state.books
  }
}