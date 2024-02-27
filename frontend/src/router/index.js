import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import ProjectsPage from "../components/ProjectsPage.vue";
import ProjectDetail from "../components/ProjectDetail.vue"; // Import the ProjectDetail component

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/projects",
      name: "Projects",
      component: ProjectsPage,
    },
    {
      path: "/projects/:projectId", // Add this dynamic route for project details
      name: "ProjectDetail",
      component: ProjectDetail,
      props: true, // Enables the route parameter `projectId` to be passed as a prop to the component
    },
  ],
});

export default router;
