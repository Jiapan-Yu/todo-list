import Vue from 'vue'

new Vue({
  el: '#root',
  // 这的 template 里用 data 里的数据时没有用 this，但是单文件组件里
  // 的 computed 里用到了 this（todo.vue）
  template: `
    <div>
      <span>Name: {{firstName + ' ' + lastName}}</span>
    </div>
  `,
  data: {
    firstName: 'Jokcy',
    lastName: 'Lou',
  }
})