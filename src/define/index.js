import Vue from 'vue'

const component = {
  props: {
    active: Boolean,
    propOne: String,
    onClick: Function,
  },
  // this.handleClick 的 this 也可以不加
  template: `
    <div>
      <span v-show="active">see me if active</span>
      <p @click="this.handleClick">{{propOne}}</p>
    </div>
  `,
  methods: {
    handleClick() {
      this.onClick()
    },
  },
};

new Vue({
  el: '#root',
  template: `
    <div>
      <comp-one 
        :active="true" 
        :propOne="text"
        :on-click="this.handleClick"
      ></comp-one>
      <comp-one :active="false"></comp-one>
    </div>
  `,
  components: {
    CompOne: component,
  },
  data: {
    text: 'some text1',
  },
  methods: {
    handleClick() {
      this.text += '1'
    },
  },
});