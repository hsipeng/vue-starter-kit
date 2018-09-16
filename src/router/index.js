import Vue from 'vue'
import Router from 'vue-router'

const Counter = () =>
  import(/* webpackChunkName: "Counter" */ '@/pages/counter.vue')
const Page2 = () => import(/* webpackChunkName: "Page2" */ '@/pages/page2.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'counter',
      component: Counter
    },
    {
      path: '/page2',
      name: 'page2',
      component: Page2
    }
  ]
})
