<template>
  <section class="real-app">
    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="接下去要做什么？"
      @keyup.enter="addTodo"
    >
    <Item
      v-for="todo in filteredTodos"
      :key="todo.id"
      :todo="todo"
      @del="deleteTodo"
    >
    </Item>
    <Tabs 
      :filter="filter"
      :todos="todos"
      @toggle="toggleFilter"
      @clearAllCompleted="clearAllCompleted"
    >
    </Tabs>
  </section>
</template>

<script>
import Item from './item.vue'
import Tabs from './tabs.vue'

let id = 0

export default {
  data() {
    return {
      todos: [],
      filter: 'all',
    }
  },
  components: {
    Item,
    Tabs,
  },
  computed: {
    filteredTodos() {
      if (this.filter === 'all') return this.todos

      const completed = this.filter === 'completed'

      if (completed) {
        return this.todos.filter(todo => todo.completed === true)
      }
      return this.todos.filter(todo => todo.completed === false)
    }
  },
  methods: {
    addTodo(e) {
      if (!e.target.value) return

      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false,
      })

      e.target.value = ''
    },
    deleteTodo(id) {
      // this.todos = this.todos.filter(todo => todo.id !== id)

      this.todos.splice(this.todos.findIndex(elm => elm.id === id), 1)
    },
    toggleFilter(state) {
      this.filter = state
    },
    clearAllCompleted() {
      this.todos = this.todos.filter(todo => !todo.completed)
    },
  }
}
</script>

<style lang="stylus" scoped>
.real-app {
  width 600px
  margin 0 auto
  box-shadow 0 0 5px #666
}
.add-input {
  position relative
  margin 0
  width 100%
  font-size 24px
  font-family inherit
  font-weight inherit
  line-height 1.4em
  outline none
  color inherit
  border 1px solid #999
  box-sizing border-box
  font-smoothing antialiased
  padding 16px 16px 16px 60px
  border none
  box-shadow inset 0 -2px 1px rgba(0, 0, 0, .5)
}
</style>