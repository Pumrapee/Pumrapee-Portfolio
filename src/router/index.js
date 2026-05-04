import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Projects from "../views/Projects.vue";
import Education from "../views/Education.vue";
import WorkExperience from "../views/WorkExperience.vue";

const routes = [
  { path: "/home", name: "home", component: Home },
  { path: "/about", name: "about", component: About },
  { path: "/projects", name: "projects", component: Projects },
  { path: "/education", name: "education", component: Education },
  {
    path: "/work-experience",
    name: "work-experience",
    component: WorkExperience,
  },
  { path: "/", redirect: { name: "home" } },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
