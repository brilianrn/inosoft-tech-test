import Vue from 'vue';
import VueRouter from 'vue-router';
import CostDetail from '../views/CostDetail.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'CostDetail',
    component: CostDetail,
  },
  {
    path: '/draft-preview',
    name: 'DraftPreview',
    component: () =>
      import(
        /* webpackChunkName: "DraftPreview" */ '../views/DraftPreview.vue'
      ),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
