<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <p>{{fullName}} {{count}}</p>
    <router-link to="/app/123">app123</router-link>
    <router-link to="/app/456">app456</router-link>
    <router-link to="/login">login</router-link>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
} from 'vuex'
import Header from './todo/header.vue'
import Footer from './todo/footer.jsx'

export default {
  data() {
    return {
      
    }
  },
  components: {
    Header,
    Footer,
  },
  mounted() {
    console.log(this.$store)
    // let i = 1
    // setInterval(() => {
    //   this.$store.commit('updateCount', {
    //     num: i++,
    //     num2: 2,
    //   })
    // }, 1000)
    this.$store.dispatch('updateCountAsync', {
      num: 5,
      time: 2000,
    })
  },
  computed: {
    // https://vuex.vuejs.org/zh/guide/state.html#mapstate-%E8%BE%85%E5%8A%A9%E5%87%BD%E6%95%B0
    ...mapState(['count']),

    // https://vuex.vuejs.org/zh/guide/getters.html#mapgetters-%E8%BE%85%E5%8A%A9%E5%87%BD%E6%95%B0
    ...mapGetters(['fullName']),
  },
}
</script>

<style lang="stylus" scoped>
#app {
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover {
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .7
  z-index -1
}
</style>