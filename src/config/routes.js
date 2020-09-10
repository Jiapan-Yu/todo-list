import Todo from '../todo/todo.vue'
import Login from '../login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app',
  },
  {
    path: '/app',
    props: route => ({ id: route.query.b }),
    component: Todo,
    name: 'app',
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