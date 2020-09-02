import Vue from 'vue'

const component = {
  template: '<div>this is another component</div>'
};

Vue.component('CompOne', component);

new Vue({
  el: '#root',
  template: '<comp-one></comp-one>',
});