import Vue from 'vue'

const component = {
  props: {
    active: Boolean,
    propOne: {
      type: Number,
      required: true,
      validator(v) {
        if (v > 5) return false;

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
      <comp-one :propOne="2" :active="false"></comp-one>
    </div>
  `,
  components: {
    CompOne: component,
  },
  data: {
    text: 1,
  },
  mounted () {
    console.log(this.$refs)
  },
  methods: {
    handleClick() {
      this.text += 1
    },
  },
});