import Vuex from 'vuex';
import Vuano from '../src/index';
// import AuthStore from '@/framework/store/authStore';
import config from './config';


const createStore = function store() {
  return new Vuex.Store({
    state: {
      version: config.version,
    },
    mutations: {
    },
    modules: {
      message: Vuano.Stores.MessagesStore,
      //      auth: AuthStore,
    },
  });
};

export default createStore;
