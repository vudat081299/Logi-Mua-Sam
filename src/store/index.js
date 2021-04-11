import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    numberCart: 0,
    product: {},
    selectProductList: [],
    url: "https://a70f9f9e6ce0.ngrok.io/",
    login: false
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
