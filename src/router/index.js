// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  
  {
    path: '/',
    name: 'root',
    component: () => import('../components/CountriesList.vue'),

    children: [
      {
        path: '/:code', // THEN, YOU WILL HAVE TO CHANGE THIS FOR A PARAM!
        name: 'details',
        component: () => import('../components/CountryDetails.vue')
      }
    ]
  },


];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});

export default router;