import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    windowWidth: window.innerWidth
  },
  mutations: {
    UPDATE_WINDOW_WIDTH(state, width)  { state.windowWidth = width },
  },
  actions: {
  },
  modules: {
  }
})
