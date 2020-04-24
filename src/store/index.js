import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hocComponent: 'startPage',
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    hocComponent: (s) => s.hocComponent,
  },
});
