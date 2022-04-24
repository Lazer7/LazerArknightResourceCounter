import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/DropTable",
    name: "dropTable",
    component: () => import("../views/DropTableView.vue"),
  },
  {
    path: "/Info",
    name: "info",
    component: () => import("../views/InfoView.vue"),
  },
  {
    path: "/Resource",
    name: "resource",
    component: () => import("../views/ChartView.vue"),
  },
  {
    path: "/Settings",
    name: "settings",
    component: () => import("../views/SettingView.vue"),
  },
  {
    path: "/UserResources",
    name: "userResources",
    component: () => import("../views/UserResourceView.vue"),
  },
  {
    path: "/UserCharts",
    name: "userCharts",
    component: () => import("../views/UserChartsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
