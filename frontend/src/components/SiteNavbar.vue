<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid d-flex justify-content-between">
          <!-- Logo on the top left -->
          <a class="navbar-brand" href="#">Ability Upgrade</a>

          <!-- Social Links on the Top Right -->
          <div class="social-links">
              <a href="https://github.com/ethanreddick" class="nav-link">
                  <font-awesome-icon :icon="['fab', 'github']" class="icon"/>
              </a>
              <a href="https://www.linkedin.com/in/ethanreddick/" class="nav-link">
                  <font-awesome-icon :icon="['fab', 'linkedin']" class="icon" />
              </a>
          </div>
      </div>
      <!-- Centered Navigation Buttons, positioned absolutely to be truly centered -->
      <div class="navbar-nav centered-nav">
          <a class="nav-item nav-link" href="#">Home</a>
          <a class="nav-item nav-link" href="#">Blog</a>
          <a class="nav-item nav-link" href="#">Projects</a>
      </div>
  </nav>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: "SiteNavbar",
  components: {
    FontAwesomeIcon
  }
};
</script>

<style scoped>
.icon {
  color: black;
  font-size: 24px;
  margin-right: 15px;
}
.nav-link:last-child .icon {
  margin-right: 0;
}
.social-links {
  display: flex;
}
.centered-nav {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  top: 10px;
  left: 0;
}
</style>
