import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import News from '@/components/News'
import Knowledge from '@/components/Knowledge'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/News',
      name: 'News',
      meta: {
        title: 'News'
      },
      component: News
    },
    {
      path: '/',
      name: 'Home',
      meta: {
        title: ''
      },
      component: News
    },
    {
      path: '/Knowledge',
      name: 'Knowledge',
      component: Knowledge
    }
  ]
})
