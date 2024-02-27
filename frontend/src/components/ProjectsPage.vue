<template>
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
</template>

<script>
export default {
    name: 'ProjectsPage',
    data() {
        return {
            projects: [
                {
                    id: "NAS",
                    title: 'Network Attached Storage (NAS)',
                    description: 'A multipurpose network storage server with file sharing, multimedia streaming, and cloud synchronization capabilities.',
                    imageName: 'nas.png', // image credit: https://www.flaticon.com/free-icon/nas_4943821
                    created: 'July 20th, 2023',
                    updated: 'January 23rd, 2024',
                },
                {
                    id: "RasberryPi5",
                    title: 'Rasberry Pi 5',
                    description: 'Used to host this website. I SSH into the Pi using certificates I configured to update the website and manage the server.',
                    imageName: 'pi.png', // image credit:
                    created: 'Febrary 21st, 2024',
                    updated: 'Febrary 24th, 2024',
                },
                // Add more projects here
            ],
        };
    },
    methods: {
        goToProject(projectId) {
            // Change 'id' to 'projectId' to match the route parameter name
            this.$router.push({ name: 'ProjectDetail', params: { projectId } });
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
    flex-direction: row;
    align-items: center;
    /* Changed from flex-start to center */
    margin: 10px;
    /* Decreased from 20px to reduce space between bubbles */
    padding: 20px;
    /* This applies padding equally on all sides */
    padding-bottom: 10px;
    /* Reduced the bottom padding specifically */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    border-radius: 15px;
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
