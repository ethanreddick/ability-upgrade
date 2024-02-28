<template>
    <div class="max-width-container">
        <div class="projects-container">
            <div class="project-bubble" v-for="project in projects" :key="project.id" @click="goToProject(project.id)">
                <div class="project-image">
                    <img :src="require(`@/assets/${project.imageName}`)" alt="Project Image" />
                </div>
                <div class="project-text">
                    <div class="project-info">
                        <h3>{{ project.title }}</h3>
                        <p>{{ project.description }}</p>
                    </div>
                    <div class="project-dates">
                        <p class="created-date">Created: {{ project.created }}</p>
                        <p class="updated-date">Updated: {{ project.updated }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { projects } from '../data/projectsData.js';

export default {
    name: 'ProjectsPage',
    data() {
        return {

        };
    },
    computed: {
        // Use a computed property to access the imported projects
        projects() {
            return projects;
        }
    },
    methods: {
        goToProject(projectId) {
            // Navigate to the ProjectDetail component with the project ID
            this.$router.push({ name: 'ProjectDetail', params: { projectId } });
        },
    },
};
</script>

<style scoped>
.max-width-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
}

.projects-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.project-bubble {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px;
    padding: 20px;
    padding-bottom: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    border-radius: 15px;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    /* Smooth transition for shadow and transform */
}

.project-bubble:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    /* Enhanced shadow for raised effect */
    transform: translateY(-5px);
    /* Slightly lift the element */
}

.project-image img {
    width: 100px;
    height: auto;
    margin-right: 20px;
}

.project-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    max-width: 500px;
}

.project-info,
.project-dates {
    margin: 0;
}

.project-dates {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.project-dates p {
    color: gray;
    font-size: 0.8rem;
}
</style>
