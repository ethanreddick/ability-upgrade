<template>
    <div class="project-detail-container">
        <div class="left-panel">
            <img :src="projectImageUrl" alt="Project Image" />
            <!-- Additional info here -->
        </div>
        <div class="right-panel">
            <div class="options">
                <!-- Description, Gallery, etc. buttons here -->
            </div>
            <div class="content">
                <!-- Dynamically display content based on selected option -->
            </div>
        </div>
    </div>
</template>

<script>
// Import or fetch project details as needed
export default {
    props: ['projectId'],
    data() {
        return {
            // project details state
        };
    },
    mounted() {
        // Fetch project details based on projectId or use a store
    },
};
</script>

<style scoped>
/* Your styles here */
</style>
