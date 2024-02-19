<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <!-- Logo on the top left -->
            <a class="navbar-brand" href="#">Ability Upgrade</a>

            <!-- Centered Navigation Buttons -->
            <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink1" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Menu 1
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
                            <li><a class="dropdown-item" href="#">Action 1</a></li>
                            <li><a class="dropdown-item" href="#">Another Action 1</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Menu 2
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
                            <li><a class="dropdown-item" href="#">Action 2</a></li>
                            <li><a class="dropdown-item" href="#">Another Action 2</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink3" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Menu 3
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink3">
                            <li><a class="dropdown-item" href="#">Action 3</a></li>
                            <li><a class="dropdown-item" href="#">Another Action 3</a></li>
                        </ul>
                    </li>
                </ul>
            </div>

            <!-- Social Links on the Top Right -->
            <div class="d-flex">
                <a href="https://www.linkedin.com/in/ethanreddick/" class="nav-link">
                    <font-awesome-icon :icon="['fab', 'linkedin']" class="icon"/>
                </a>
                <a href="https://github.com/ethanreddick" class="nav-link">
                    <font-awesome-icon :icon="['fab', 'github']" class="icon"/>
                </a>
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
  color: black; /* Sets the icon color to black */
  font-size: 24px; /* Increase the size of the icon */
  margin-right: 15px; /* Adds margin to the right of each icon */
}
/* If you want to specifically target only the last icon to not have a margin, you can use :last-child selector */
.nav-link:last-child .icon {
  margin-right: 0; /* Removes margin for the last icon */
}
</style>
