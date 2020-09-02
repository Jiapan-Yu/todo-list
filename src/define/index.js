import Vue from 'vue'

const component = {
  props: {
    active: Boolean,
    propOne: String,
  },
  template: `
    <div>
      <span v-show="active">see me if active</span>
      <p>{{propOne}}</p>
    </div>
  `,
};

Vue.component('CompOne', component);

new Vue({
  el: '#root',
  template: `
    <div>
      <comp-one :active="true" propOne="some text"></comp-one>
      <comp-one :active="false"></comp-one>
    </div>
  `,
});