<template>
    <div id="app">
        <SiteNavbar />
        <router-view></router-view>
    </div>
</template>

<script>
import SiteNavbar from "./components/SiteNavbar.vue";

export default {
    name: "App",
    components: {
        SiteNavbar,
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
a {
    color: gray; /* Default color for links */
    text-decoration: none; /* Removes underline from links */
}

a:hover {
    color: lightgray; /* Color when hovered */
    text-decoration: underline; /* Adds underline on hover */
}
</style>
