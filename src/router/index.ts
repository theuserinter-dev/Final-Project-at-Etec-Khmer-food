import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../store/auth";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  { path: "/", name: "home", component: () => import("../views/Home.vue") },
  {
    path: "/foods",
    name: "foods",
    component: () => import("../views/Foods.vue"),
  },
  {
    path: "/foods/:id",
    name: "food-detail",
    component: () => import("../views/FoodDetail.vue"),
  },
  {
    path: "/favorites",
    name: "favorites",
    component: () => import("../views/Favorites.vue"),
  },
  {
    path: "/recipes",
    name: "recipes",
    component: () => import("../views/Recipes.vue"),
  },
  {
    path: "/restaurants",
    name: "restaurants",
    component: () => import("../views/Restaurants.vue"),
  },
  {
    path: "/restaurants/:id",
    name: "restaurant-detail",
    component: () => import("../views/RestaurantDetail.vue"),
  },
  {
    path: "/ingredients",
    name: "ingredients",
    component: () => import("../views/Ingredients.vue"),
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("../views/Checkout.vue"),
  },
  {
    path: "/order-success",
    name: "order-success",
    component: () => import("../views/OrderSuccess.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/Admin.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach((to) => {
  const { state } = useAuthStore();
  const isLoggedIn = !!state.user;

  if (to.name !== "login" && !isLoggedIn) {
    return { name: "login", query: { redirect: to.fullPath } };
  }
  if (to.name === "login" && isLoggedIn) {
    return { path: "/" };
  }
});
