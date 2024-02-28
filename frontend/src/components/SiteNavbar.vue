<template>
    <div class="max-width-container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <!-- Flex container to align items -->
                <div class="navbar-content d-flex justify-content-between align-items-center w-100">
                    <!-- Logo on the top left -->
                    <router-link to="/" class="nav-item nav-link">Ability Upgrade</router-link>

                    <!-- Centered Navigation Buttons -->
                    <div class="navbar-nav centered-nav">
                        <router-link to="/" class="nav-item nav-link">Home</router-link>
                        <router-link to="/blog" class="nav-item nav-link">Blog</router-link>
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
    </div>
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
.max-width-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
    background-color: #f9f9f9;
    /* Light background color for the bubble */
    border-radius: 15px;
    /* Rounded corners for the bubble effect */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    /* Subtle shadow for depth */
    /* Adjust padding as necessary to fit your design */
}

.navbar {
    background-color: transparent;
    /* Make navbar background transparent */
    border: none;
    /* Remove any borders */
}

.navbar-logo {
    font-size: 1.8em;
    /* Increase the logo size */
}

.nav-item.nav-link {
    font-size: 1.2em;
    /* Increase the font size for nav items */
}

.icon {
    font-size: 1.8em;
    /* Adjust icon size to match the increased nav item size */
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.centered-nav {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
}

@media (max-width: 992px) {
    .navbar-logo {
        font-size: 1.5em;
        /* Slightly smaller size for smaller screens */
    }

    .nav-item.nav-link {
        font-size: 1em;
        /* Adjust font size for smaller screens */
    }

    .icon {
        font-size: 1.2em;
        /* Adjust icon size for smaller screens */
    }

    .centered-nav,
    .navbar-nav {
        flex-direction: row !important;
        justify-content: center;
        align-items: center;
    }

    .nav-item {
        display: inline-block;
        margin-right: 10px;
    }

    .nav-item:last-child {
        margin-right: 0;
    }
}
</style>
