<template>
    <div id="app">
        <SiteNavbar />
        <HomePage />
    </div>
</template>

<script>
import SiteNavbar from './components/SiteNavbar.vue';
import HomePage from './components/HomePage.vue';

export default {
    name: 'App',
    components: {
        SiteNavbar,
        HomePage
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
