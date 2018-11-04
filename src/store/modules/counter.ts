import * as types from '../mutation-types';
import {Commit} from 'vuex';

// async(or ajax) function
const getData = (time: any) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });

// init state
const state = {count: 0};
export interface IState {
  count: number;
}

export interface IAction {
  commit: Commit;
}
// mutations
const mutations = {
  [types.INCREMENT](state: IState) {
    state.count++;
  },
  [types.DECREMENT](state: IState) {
    state.count--;
  },
};

// actons
const actions = {
  increment: ({commit}: IAction) => commit(types.INCREMENT),
  decrement: ({commit}: IAction) => commit(types.DECREMENT),
  async incrementIfAsync({commit}: IAction) {
    commit(types.INCREMENT, await getData(1000));
  },
  async decrementIfAsync({commit}: IAction) {
    commit(types.DECREMENT, await getData(1000));
  },
};

// getters
const getters = {
  isEvenOrOdd(state: IState) {
    return state.count % 2 === 0 ? 'even' : 'odd';
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
