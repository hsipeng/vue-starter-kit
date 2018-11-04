import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () =>
        import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ '@/views/About.vue'),
      // component: About,
    },
    {
      path: '/counter',
      name: 'counter',
      component: () =>
        import(/* webpackChunkName: "counter" */ '@/views/Counter.vue'),
    },
    {
      path: '/counter2',
      name: 'counter2',
      component: () =>
        import(/* webpackChunkName: "counter2" */ '@/views/Counter2.vue'),
    },
  ],
});
