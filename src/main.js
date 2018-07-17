import Vue from 'vue'
import App from './App.vue'

import KsVueScrollmagic from 'ks-vue-scrollmagic'
Vue.use(KsVueScrollmagic)

new Vue({
  el: '#app',
  render: h => h(App)
})