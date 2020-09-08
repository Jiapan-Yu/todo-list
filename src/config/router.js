import Router from 'vue-router'

import routes from './routes'

export default () => new Router({
  routes,
  // 加了 mode: 'history' 后好像需要 SSR 才能正常跳转
  // mode: 'history',
  base: '/base/',
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link',
})