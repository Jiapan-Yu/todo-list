import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <div>{{text}}</div>
      <div>
        <input type="radio" value="one" v-model="radio">
        <input type="radio" value="two" v-model="radio">
      </div>
    </div>
  `,
  data: {
    text: 0,
    active: false,
    radio: "one",
  },
})