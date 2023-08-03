import Vuex from 'vuex';

import homeStore from '@/store/modules/homeStore.js';
import subStore from '@/store/modules/subStore.js';
const store = new Vuex.Store({
  modules: {
    homeStore,
    subStore
  },
});
export default store;