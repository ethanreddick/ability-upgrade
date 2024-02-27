<template>
    <div class="project-detail-container" v-if="project">
        <div class="left-panel">
            <img :src="require(`@/assets/${project.imageName}`)" alt="Project Image" />
            <h1>{{ project.title }}</h1>
            <p>{{ project.description }}</p>
        </div>
        <div class="right-panel">
            <!-- You can add additional interactive elements here -->
        </div>
    </div>
    <div v-else>
        <p>Project not found.</p>
    </div>
</template>

<script>
import { projects } from '../data/projectsData.js';


export default {
    props: ['projectId'],
    data() {
        return {
            project: null,
        };
    },
    mounted() {
        this.fetchProjectDetails();
    },
    methods: {
        fetchProjectDetails() {
            const project = projects.find(p => p.id === parseInt(this.projectId, 10));
            if (project) {
                this.project = project;
            }
        },
    },
};
</script>

<style scoped>
/* Your styles here */
</style>
