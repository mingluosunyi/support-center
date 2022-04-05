import router from "@/router"
import state from "@/state"

let baseUrl
export async function $fetch(url,options) {
  const finalOptions = Object.assign({},{
    headers: {
      'Content-type': 'application/json',
    },
    credentials: 'include'
  },options)
  const response = await fetch(`${baseUrl}${url}`,finalOptions)
  if(response.ok) {
    const data = await response.json()
    return data
  }else if (response.status === 403){
    state.user = null
    //如果当前路由在私有路由中
    if(router.currentRoute.matched.some(r => r.meta.private)) {
      router.replace({
        name: 'login',
        params: {
          wantedRoute: router.currentRoute.fullPath
        }
      })
    }
  } else {
    const message = await response.text()
    const error = new Error(message)
    error.response = response
    throw error
  }
}

export default {
  install (Vue,options) {
    baseUrl = options.baseUrl
    Vue.prototype.$fetch = $fetch
  }
}