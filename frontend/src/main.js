import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Import the router configuration
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faLinkedin, faGithub);

const app = createApp(App);

// Register the FontAwesomeIcon component globally
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router); // Tell your Vue app to use the imported router

app.mount("#app");

// For debugging the router
router.beforeEach((to, from, next) => {
  console.log(`Navigating from ${from.fullPath} to ${to.fullPath}`);
  next();
});

router.afterEach((to, from) => {
  console.log(`Navigation to ${to.fullPath} completed from ${from.fullPath}`);
});

router.onError((error) => {
  console.error("Router encountered an error:", error);
});
