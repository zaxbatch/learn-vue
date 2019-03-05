// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import DataBinding from '@/components/DataBinding'
import BasicStuff from '@/components/BasicStuff'
import Header from './Header'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

new Vue({
  el: '#header',
  router,
  components: { Header },
  template: '<Header/>'
})

new Vue({
  el: '#data-binding',
  router,
  components: { DataBinding },
  template: '<DataBinding/>'
})

new Vue({
  el: '#basic-stuff',
  router,
  components: { BasicStuff },
  template: '<BasicStuff/>'
})
