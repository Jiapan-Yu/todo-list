import Vue from 'vue'

const component = {
  props: ['props1'],
  name: 'comp',
  render(createElement) {
    return createElement('div', {
      style: this.style,
      on: {
        click: () => { this.$emit('click') }
      },
    }, [
      this.$slots.default,
      this.props1,
    ]);
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
    console.log(this.$refs.comp.value)
  },
  methods: {
    handleClick() {
      console.log('clicked')
    },
  },
  render(createElement) {
    return createElement(
      'comp-one',
      {
        ref: 'comp',
        props: {
          props1: this.value,
        },
        on: {
          click: this.handleClick
        },
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