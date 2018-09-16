import * as types from '../mutation-types.js'
// async(or ajax) function
const getData = time =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time)
  })

// init state
const state = { count: 0 }

// mutations
const mutations = {
  [types.INCREMENT] (state) {
    state.count++
  },
  [types.DECREMENT] (state) {
    state.count--
  }
}

// actons
const actions = {
  increment: ({ commit }) => commit(types.INCREMENT),
  decrement: ({ commit }) => commit(types.DECREMENT),
  async incrementIfAsync ({ commit }) {
    commit(types.INCREMENT, await getData(1000))
  },
  async decrementIfAsync ({ commit }) {
    commit(types.DECREMENT, await getData(1000))
  }
}

// getters
const getters = {
  isEvenOrOdd (state) {
    return state.count % 2 === 0 ? 'even' : 'odd'
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
