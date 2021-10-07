import { createWebHistory, createRouter } from "vue-router"
import HelloWorld from "../components/HelloWorld.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: HelloWorld,
  },
  // {
  //   path: "/projets",
  //   name: "Projets",
  //   component: Projects,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;