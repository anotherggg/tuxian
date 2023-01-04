import { createStore } from 'vuex';
import createPersistedstate from 'vuex-persistedstate';

import cart from './modules/cart';
import category from './modules/category';
import user from './modules/user';
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    cart,
    category,
  },
  plugins: [
    createPersistedstate({
      key: 'erabbit-client-pc-store',
      paths: ['user', 'cart'],
    }),
  ],
});
