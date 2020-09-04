import Vue from 'vue'

const component = {
  name: 'comp',
  template: `
    <div :style="style">
      <slot></slot>
    </div>
  `,
  data() {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa',
      },
      value: 'component value',
    };
  },
};

new Vue({
  components: {
    CompOne: component,
  },
  el: '#root',
  data () {
    return {
      value: '123',
    };
  },
  mounted() {
    console.log()
  },
  template: `
    <comp-one ref="comp">
      <span ref="span">{{value}}</span>
    </comp-one>
  `,
});