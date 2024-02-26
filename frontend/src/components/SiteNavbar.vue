<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <!-- Flex container to align items -->
            <div class="navbar-content d-flex justify-content-between align-items-center w-100">
                <!-- Logo on the top left -->
                <a class="navbar-brand" href="#">Ability Upgrade</a>

                <!-- Centered Navigation Buttons -->
                <div class="navbar-nav centered-nav">
                    <router-link to="/" class="nav-item nav-link">Home</router-link>
                    <a class="nav-item nav-link" href="#">Blog</a>
                    <router-link to="/projects" class="nav-item nav-link">Projects</router-link>
                </div>

                <!-- Social Links on the Top Right -->
                <div class="social-links">
                    <a href="https://github.com/ethanreddick" class="nav-link">
                        <font-awesome-icon :icon="['fab', 'github']" class="icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/ethanreddick/" class="nav-link">
                        <font-awesome-icon :icon="['fab', 'linkedin']" class="icon" />
                    </a>
                </div>
            </div>
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
    z-index: 1;
}

.navbar-content {
    position: relative;
    /* Ensure this is relative to allow absolute child positioning */
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.centered-nav {
    position: absolute;
    /* Use absolute positioning */
    left: 50%;
    /* Start at the half of the container */
    transform: translateX(-50%);
    /* Shift it back to truly center */
    display: flex;
    justify-content: center;
    align-items: center;
}

@media (max-width: 992px) {

    .centered-nav,
    .navbar-nav {
        flex-direction: row !important;
        /* Ensure row layout */
        justify-content: center;
        align-items: center;
    }

    .nav-item {
        display: inline-block;
        /* Ensure inline display for items */
        margin-right: 10px;
        /* Adjust spacing as necessary */
    }

    .nav-item:last-child {
        margin-right: 0;
        /* No extra margin for the last item */
    }
}
</style>
