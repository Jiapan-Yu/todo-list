import Todo from '../todo/todo.vue'
import Login from '../login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app',
  },
  {
    path: '/app/:id',
    // props: route => ({ id: route.query.b }),
    props: true,
    component: Todo,
    name: 'app',
    beforeEnter(to, from ,next) {
      console.log('app route before enter')
      next()
    },
    // children: [
    //   {
    //     path: 'test', // 不要加斜杠
    //     component: Login,
    //   }
    // ],
  },
  {
    path: '/login',
    component: Login,
  },
]