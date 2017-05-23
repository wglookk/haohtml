import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import vone from '@/components/vone'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vone',
      component: vone
    },
    {
      path: '/aa',
      name: 'Hello',
      component: Hello
    }
  ]
})
