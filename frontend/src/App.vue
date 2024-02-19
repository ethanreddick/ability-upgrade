<template>
    <div>
        <!-- Navbar Component -->
        <SiteNavbar />
        <!-- Placeholder for future content -->
        <div class="placeholder-content">
            <p>Welcome to Ability Upgrade</p>
        </div>
    </div>
</template>

<script>
import SiteNavbar from './components/SiteNavbar.vue'; // Ensure this path matches the location of your Navbar.vue file

export default {
    name: 'App',
    components: {
        SiteNavbar // Register Navbar component for use
    },
};
</script>

<style>
/* Styling for placeholder content, adjust as needed */
.placeholder-content {
    text-align: center;
    margin-top: 20px;
    /* Adds some space below the navbar */
}
</style>
