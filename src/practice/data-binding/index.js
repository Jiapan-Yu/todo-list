import Vue from 'vue'

new Vue({
  el: '#root',
  // 当绑定数组的时候容易遗漏双引号
  template: `
    <div 
      :id="aaa" 
      @click="handleOnClick" 
      v-html="html"
      :style="[styles, styles2]"
    >
      {{ Date.now() }}
    </div>
  `,
  data: {
    isActive: false,
    aaa: 'main',
    html: '<span>this is a span</span>',
    styles: {
      color: 'red',
      appearance: 'none',
    },
    styles2: {
      color: 'blue',
    },
  },
  methods: {
    handleOnClick() {
      alert('clicked')
    },
  }
})