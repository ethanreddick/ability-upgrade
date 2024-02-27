<template>
    <div v-if="project">
        <div class="project-image-container">
            <img :src="require(`@/assets/${project.imageName}`)" alt="Project Image" class="project-main-image" />
        </div>
        <div class="project-detail-container">
            <div class="sub-navbar">
                <div class="slider-background" :style="{ 'left': sliderLeft + 'px', 'width': sliderWidth + 'px' }"></div>
                <button v-for="tab in tabs" :key="tab.id" @click="selectTab(tab.id, $event)"
                    :class="{ 'active': tab.id === selectedTab }">{{ tab.name }}</button>
            </div>
            <div class="content-section">
                <div v-if="selectedTab === 'summary'" class="content-section summary-content">
                    <h1>{{ project.title }}</h1>
                    <p>{{ project.descriptionLong }}</p>
                </div>
                <div v-if="selectedTab === 'gallery'">
                    <!-- Gallery content here -->
                </div>
                <div v-if="selectedTab === 'references'">
                    <!-- References content here -->
                </div>
            </div>
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
            selectedTab: 'summary',
            tabs: [
                { id: 'summary', name: 'Summary' },
                { id: 'gallery', name: 'Gallery' },
                { id: 'references', name: 'References' }
            ],
            sliderLeft: 0,
            sliderWidth: 0,
        };
    },
    mounted() {
        this.fetchProjectDetails();
        this.$nextTick(() => {
            this.updateSliderPosition();
        });
        window.addEventListener('resize', this.handleResize);
    },
    beforeUnmount() { // Use beforeDestroy() for Vue 2
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        fetchProjectDetails() {
            const project = projects.find(p => p.id === this.projectId);
            if (project) {
                this.project = project;
            }
        },
        selectTab(tabId, event) {
            this.selectedTab = tabId;
            this.updateSliderPosition(event.target);
        },
        updateSliderPosition(target = null) {
            if (!target) {
                target = this.$el.querySelector('.active');
            }
            this.sliderLeft = target.offsetLeft;
            this.sliderWidth = target.offsetWidth;
        },
        handleResize() {
            this.$nextTick(() => {
                this.updateSliderPosition();
            });
        },
    },
};
</script>


<style scoped>
.sub-navbar {
    display: flex;
    justify-content: center;
    margin-top: 5px;
    margin-bottom: 15px;
    position: relative;
}

.slider-background {
    position: absolute;
    bottom: 0;
    height: 100%;
    background-color: #e0e0e0;
    /* Lighter gray */
    border-radius: 20px;
    transition: left 0.4s ease, width 0.2s ease;
    /* Smooth transition for sliding effect */
}

.sub-navbar button {
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    background-color: transparent;
    cursor: pointer;
    position: relative;
    /* Ensure stacking context */
    z-index: 1;
    /* Raise above the slider background */
}

.sub-navbar button:hover,
.sub-navbar button.active {
    background-color: transparent;
    /* Keep button background transparent */
}

.project-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 10px;
}

.project-main-image {
    max-width: 80px;
    height: auto;
}

.summary-content {
    max-width: 600px;
    /* Or whatever maximum width you prefer */
    margin: 0 auto;
    /* Centering */
    margin-top: 10px;
    margin-bottom: 20px;
}

.summary-content h1 {
    text-align: center;
    margin-bottom: 20px;
}
</style>
