import firebase from 'firebase'

export default{
     state: {
     error: null
  },
  mutations: {
     SET_ERROR(state, payload){
      state.error = payload
    },
    CLEAR_ERROR(state){
      state.error = null
    }
  }, 
  getters:{
  	getError: (state) => state.error
  }
}