import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/Home.vue';
import ReportsPage from '../views/Reports.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/reports', name: 'ReportsPage', component: ReportsPage }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;