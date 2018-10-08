import Vue from 'vue';
import Vuex from 'vuex';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import 'uikit/dist/css/uikit.min.css';
import Vuano from '../src/index';
import TestComponent from './testComponent.vue';
import en from './locales/en';
import router from './router';
import createStore from './store';
import config from './config';

UIkit.use(Icons);


Vue.use(Vuex);
Vue.use(Vuano, config);
const store = createStore();
Vuano.loadLocale('en', en);

/* eslint-disable no-new */
const myVue = new Vue({
  el: '#app',
  router,
  store,
  template: `
  <test-component></test-component>
  `,
  components: {
    'test-component': TestComponent,
  },
});
console.log(myVue);
export default myVue;
