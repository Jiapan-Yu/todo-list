import Vue from 'vue'

const component = {
  props: {
    active: Boolean,
    propOne: String,
    handleClick: Function,
  },
  template: `
    <div>
      <span v-show="active">see me if active</span>
      <p @click="handleClick()">{{propOne}}</p>
    </div>
  `,
};

Vue.component('CompOne', component);

new Vue({
  el: '#root',
  template: `
    <div>
      <comp-one 
        :active="true" 
        :propOne="text"
        :handleClick="this.handleClick"
      ></comp-one>
      <comp-one :active="false"></comp-one>
    </div>
  `,
  data: {
    text: 'some text1',
  },
  methods: {
    handleClick() {
      this.text += '1'
    },
  },
});