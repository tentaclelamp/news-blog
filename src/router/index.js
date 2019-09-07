import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import News from '@/components/News'
import Knowledge from '@/components/Knowledge'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/News',
      name: 'News',
      meta: {
        title: 'News'
      },
      component: () => import(/* webpackChunkName: "news" */ '../components/News.vue')
    },
    {
      path: '/',
      name: 'Home',
      meta: {
        title: ''
      },
      component: () => import(/* webpackChunkName: "news" */ '../components/News.vue')
    },
    {
      path: '/Knowledge',
      name: 'Knowledge',
      component: () => import(/* webpackChunkName: "about" */ '../components/Knowledge.vue')
    }
  ]
})
