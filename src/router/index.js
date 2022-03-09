import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "Home",
      path: "/",
      component: () => import("../views/HomePage.vue"),
    },
    {
      name: "Register",
      path: "/register",
      component: () => import("../views/RegistrationPage.vue"),
    },
    {
      name: "Login",
      path: "/login",
      component: () => import("../views/LoginPage.vue"),
    },
    {
      name: "Feed",
      path: "/feed",
      component: () => import("../views/FeedPage.vue"),
    },
  ],
});

export default router;
