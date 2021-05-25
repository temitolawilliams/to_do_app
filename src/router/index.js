import { createRouter, createWebHistory } from "vue-router";
import About from "../view/About";
import Home from "../view/Home";

const routes = [
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
