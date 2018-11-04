import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';
import counter from './modules/counter';
import createLogger from '@/util/logger';

const debug = process.env.NODE_ENV !== 'production';
Vue.use(Vuex);
export default new Vuex.Store({
  actions,
  getters,
  mutations,
  modules: {
    counter,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
