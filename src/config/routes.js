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
    components: {
      default: Todo,
      a: Login,
    },
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
    components: {
      default: Login,
      a: Todo,
    },
  },
]