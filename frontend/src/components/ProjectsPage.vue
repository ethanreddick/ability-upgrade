<template>
    <div class="projects-container">
        <div class="project-bubble" v-for="project in projects" :key="project.id" @click="goToProject(project.id)">
            <div class="project-image">
                <!-- Update :src to use require for dynamic path resolution -->
                <img :src="require(`@/assets/${project.imageName}`)" alt="Project Image" />
            </div>
            <div class="project-info">
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
            </div>
            <div class="project-dates">
                <p>Created: {{ project.created }}</p>
                <p>Updated: {{ project.updated }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectsPage',
    data() {
        return {
            projects: [
                {
                    id: 1,
                    title: 'Network Attached Storage (NAS)',
                    description: 'A multipurpose network storage server with file sharing, multimedia streaming, and cloud synchronization capabilities.',
                    imageName: 'nas.png',
                    created: 'July 20th, 2023',
                    updated: 'January 23rd, 2024',
                },
                // Add more projects as needed
            ],
        };
    },
    methods: {
        goToProject(projectId) {
            // Logic to navigate to the project's detailed page
            this.$router.push({ name: 'ProjectDetail', params: { id: projectId } });
        },
    },
};
</script>


<style scoped>
.projects-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.project-bubble {
    display: flex;
    align-items: center;
    margin: 20px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    border-radius: 15px;
}


.project-image img {
    width: 100px;
    /* Adjust as needed */
    height: auto;
    margin-right: 20px;
    border-radius: 15px;
}

.project-info,
.project-dates {
    margin-right: 20px;
    max-width: 450px;
}
</style>
