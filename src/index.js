import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import createRouter from './config/router'
import createStore from './store/store'
import './assets/styles/global.styl'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()
const store = createStore()

// 验证一些页面需要用户登陆才去显示的
router.beforeEach((to, from, next) => {
  console.log('before each invoked')
  next()
  /* if (to.fullPath === '/app') {
    next('/login')
  } else {
    next()
  } */
})

router.beforeResolve((to, from, next) => {
  console.log('before resolve invoked')
  next()
})

// 每次导航跳转之后才被触发
router.afterEach((to, from) => {
  console.log('after each invoked')
})

new Vue({
  router,
  store,
  render(h) {
    return h(App)
  }
}).$mount('#root')