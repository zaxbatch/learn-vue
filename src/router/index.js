import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Basics from '@/components/Basics'
import Intermediate from '@/components/Intermediate'
import Advanced from '@/components/Advanced'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/basics',
      name: 'Basics',
      component: Basics
    },
    {
      path: '/intermediate',
      name: 'Intermediate',
      component: Intermediate
    },
    {
      path: '/advanced',
      name: 'Advanced',
      component: Advanced
    }
  ]
})
