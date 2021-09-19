import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/item",
    name: "Item",
    component: () =>
      import("../views/Item.vue")
  },
  {
    path: "/in",
    name: "In",
    component: () =>
      import("../views/In.vue")
  },
  {
    path: "/out",
    name: "Out",
    component: () =>
      import("../views/Out.vue")
  },
  {
    path: "/history",
    name: "history",
    component: () =>
      import("../views/history.vue")
  },
  {
    path: "/view",
    name: "View",
    component: () =>
      import("../views/view.vue")
  },



];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
