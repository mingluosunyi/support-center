import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueFetch,{$fetch} from './plugins/fetch'
import state from './state'
import VueState from './plugins/state'
import './global-components'
import * as filters from './filters'

Vue.use(VueFetch,{
  baseUrl: 'http://localhost:3000/'
})

Vue.use(VueState,state)

for (const key in filters) {
  Vue.filter(key,filters[key])
}

Vue.config.productionTip = false

async function main() {
  try{
    state.user = await $fetch('user')
  }catch (e){
    console.warn(e)
  }
  new Vue({
    router,
    render: h => h(App),
    data: state
  }).$mount('#app')
}

main()