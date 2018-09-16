/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
// Vue.use(Vuex)
// Vue.config.productionTip = false
// const getData = time => new Promise((resolve, reject) => {
//   setTimeout(() => { resolve() }, time)
// });

/* eslint-disable no-new */
// const store = new Vuex.Store({
//   state: {
//       count: 0
//   },
//   getters: {
//       isEvenOrOdd(state) {
//           return state.count % 2 === 0 ? 'even' : 'odd'
//       }
//   },
//   actions: {
//     async incrementIfAsync({ commit }) {
//         commit('increment', await getData(1000))
//     }
// },
//   mutations: {
//       increment(state) {
//           state.count++
//       },
//       decrement(state) {
//           state.count--
//       }
//   }
// })
/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});
