import { createWebHistory, createRouter } from "vue-router"
import HomeApp from '../pages/Home/HomeApp.vue'
import ProjectsApp from '../pages/Projects/ProjectsApp.vue'

const routes = [
  {
    path: "/",
    name: "home-app",
    component: HomeApp,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: ProjectsApp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;