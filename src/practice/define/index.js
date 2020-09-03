import Vue from 'vue'

const component = {
  props: {
    active: Boolean,
    propOne: {
      type: String,
      required: true,
      validator(v) {
        if (/a/i.test(v)) return false;

        return true
      },
    },
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
      <comp-one propOne="some rndom text" :active="false"></comp-one>
    </div>
  `,
  components: {
    CompOne: component,
  },
  data: {
    text: 'b',
  },
  mounted () {
    console.log(this.$refs)
  },
  methods: {
    handleClick() {
      this.text += 'a'
    },
  },
});