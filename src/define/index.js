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
      this.$emit('click')
    },
  },
};

new Vue({
  el: '#root',
  // this.handleClick 的 this 也可以不加
  template: `
    <div>
      <comp-one 
        :active="true" 
        :propOne="text"
        @click="handleClick"
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