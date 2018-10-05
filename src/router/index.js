import Vue from 'vue'
import Router from 'vue-router'
import songRoot from '@/components/songRoot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'songRoot',
      component: songRoot
    }
  ]
})
