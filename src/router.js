import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Sports from './views/sports'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Sports',
      path: '/',
      component: Sports,
    },
  ],
})
