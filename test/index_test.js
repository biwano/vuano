import TestComponent from './testComponent';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuano from '../src/index';
import en from './locales/en';
import createStore from './store';
import config from './config';

Vue.use(Vuex);
Vue.use(Vuano, config);
const store = createStore();
Vuano.loadLocale('en', en);


describe('TestComponent', () => {
  // Make the tests fail on console errors
  const oldError = console.error;
  beforeEach(() => {
    console.error = function (message) {
      throw new Error(message);
    };
  });
  afterEach(() => console.error = oldError);

  // The tests
  it('should validate inputs', () => {
  	// Mounting view
  	TestComponent.store = store;
    const Constructor = Vue.extend(TestComponent);
  	const vm = new Constructor().$mount();
    vm.$nextTick(() => {
  	  // Testing test component structure
      expect(vm.$refs.booleanDom.innerHTML).toBe('');

      vm.booleanAttribute = 'false';
      vm.$nextTick(() => {
     	  // Testing success class setup
        expect(vm.$refs.booleanDom.innerHTML).toBe('false');
      });
    });
  });
});
