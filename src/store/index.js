import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    numberCart: 0,
    product: {},
    selectProductList: [],
    url: "https://26285cfe7b75.ngrok.io/",
    login: false
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
