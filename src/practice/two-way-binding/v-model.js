import Vue from 'vue'

const component = {
  template: `
    <div>
      <input type="text">
    </div>
  `
}

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  template: `
    <div>
      <comp-one></comp-one>
    </div>
  `
})