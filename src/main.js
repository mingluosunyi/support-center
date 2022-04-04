import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueFetch from './plugins/fetch'
import state from './state'
import VueState from './plugins/state'
import './global-components'

Vue.use(VueFetch,{
  baseUrl: 'http://localhost:3000/'
})

Vue.use(VueState,state)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  data: state
}).$mount('#app')
