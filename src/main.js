// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import index from './index'
import Router from './router/index'
import Resource from 'vue-resource'
Vue.use(VueRouter)
Vue.use(Resource)
Vue.config.productionTip = false
const router = Router(VueRouter)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<index/>',
  components: { index }
})
