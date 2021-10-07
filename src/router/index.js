import { createWebHistory, createRouter } from "vue-router"
import HomeApp from '../pages/Home/HomeApp.vue'
import ProjectsApp from '../pages/Projects/ProjectsApp.vue'
import ProjectApp from '../pages/Project/ProjectApp.vue'

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
  { name: 'projects', path: '/portfolio', component: ProjectsApp, children:
      [
        { name: 'project', path: ':id', component: ProjectApp, props: true }
      ] 
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;