import Vue from 'vue'

const component = {
  name: 'comp',
  render(createElement) {
    return createElement('div', {
      style: this.style
    }, this.$slots.default);
  },
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
  render(createElement) {
    return createElement(
      'comp-one',
      {
        ref: 'comp',
      },
      // 字符串不需要用数组，子节点的时候需要用数组
      [
        createElement('span', {
          ref: 'span',
        }, this.value)
      ]
    );
  },
});