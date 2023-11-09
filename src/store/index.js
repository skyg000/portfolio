import { createStore } from 'vuex'

export default createStore({
  state: {
    dark: false
  },
  getters: {
  },
  mutations: {
    setDark(state, boolean){
      state.dark = boolean
    }
  },
  actions: {
  },
  modules: {
  }
})
