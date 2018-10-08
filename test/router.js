import Vue from 'vue';
import Router from 'vue-router';
import TesComponent from './testComponent.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'Base', component: TesComponent },
    { path: '/it', name: 'It', component: TesComponent },
    { path: '/it/is', name: 'Is', component: TesComponent },
    { path: '/it/is/a', name: 'A', component: TesComponent },
    { path: '/it/is/a/route', name: 'Route', component: TesComponent },
  ],
});
