import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify' // using Vuetify for all web app.
import VueCookies from 'vue-cookies'
import axios from './plugins/axios'

Vue.config.productionTip = false

Vue.use(axios)
Vue.use(VueCookies)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
