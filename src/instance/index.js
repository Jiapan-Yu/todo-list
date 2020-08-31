import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  template: '<div>{{ text }}</div>',
  data: {
    text: 0
  },
});

app.$mount('#root')

setInterval(() => {
  app.text += 1
}, 1000);

// console.log(app.$options.data)
// app.$options.render = h => h('div', {}, "new render func");

app.$watch('text', (newV, oldV) => {
  console.log(newV + ': ' + oldV);
})