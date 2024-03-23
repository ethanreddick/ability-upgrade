<template>
    <div class="max-width-container">
        <div v-if="project">
            <div class="project-image-container">
                <img
                    :src="require(`@/assets/${project.imageName}`)"
                    alt="Project Image"
                    class="project-main-image"
                />
            </div>
            <div class="project-detail-container">
                <div class="sub-navbar">
                    <div
                        class="slider-background"
                        :style="{
                            left: sliderLeft + 'px',
                            width: sliderWidth + 'px',
                        }"
                    ></div>
                    <button
                        v-for="tab in tabs"
                        :key="tab.id"
                        @click="selectTab(tab.id, $event)"
                        :class="{ active: tab.id === selectedTab }"
                    >
                        {{ tab.name }}
                    </button>
                </div>
                <div class="content-section">
                    <div
                        v-if="selectedTab === 'summary'"
                        class="content-section summary-content"
                    >
                        <h1>{{ project.title }}</h1>
                        <div v-html="project.descriptionLong"></div>
                    </div>
                    <div
                        v-if="selectedTab === 'gallery'"
                        class="gallery-container"
                    >
                        <template v-if="project.id === 'Search'">
                            <div class="video-container">
                                <h2 class="gallery-title">Search Demo</h2>
                                <video
                                    v-if="project.projectImages.length > 0"
                                    controls
                                    class="gallery-video"
                                >
                                    <source
                                        :src="
                                            require(
                                                '@/assets/' +
                                                    project.projectImages[0],
                                            )
                                        "
                                        type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </template>
                        <template v-else>
                            <img
                                v-for="(image, index) in project.projectImages"
                                :key="index"
                                :src="requireImage(image)"
                                alt="Gallery Image"
                                class="gallery-image"
                                @click="openModal(image)"
                            />
                        </template>
                    </div>

                    <div v-if="showModal" class="modal" @click="closeModal">
                        <img
                            :src="enlargedImage"
                            class="enlarged-image"
                            @click.stop
                        />
                    </div>
                    <div
                        v-if="selectedTab === 'references'"
                        class="content-section summary-content"
                    >
                        <h1>References</h1>
                        <div v-html="project.references"></div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <p>Project not found.</p>
        </div>
    </div>
</template>

<script>
import { projects } from "../data/projectsData.js";

export default {
    props: ["projectId"],
    data() {
        return {
            project: null,
            selectedTab: "summary",
            tabs: [
                { id: "summary", name: "Summary" },
                { id: "gallery", name: "Gallery" },
                { id: "references", name: "References" },
            ],
            sliderLeft: 0,
            sliderWidth: 0,
            showModal: false,
            enlargedImage: null,
        };
    },
    mounted() {
        this.fetchProjectDetails();
        this.$nextTick(() => {
            this.updateSliderPosition();
        });
        window.addEventListener("resize", this.handleResize);
    },
    beforeUnmount() {
        // Use beforeDestroy() for Vue 2
        window.removeEventListener("resize", this.handleResize);
    },
    methods: {
        fetchProjectDetails() {
            const project = projects.find((p) => p.id === this.projectId);
            if (project) {
                this.project = project;
            }
        },
        requireImage(image) {
            return require(`@/assets/${image}`);
        },
        selectTab(tabId, event) {
            this.selectedTab = tabId;
            this.updateSliderPosition(event.target);
        },
        updateSliderPosition(target = null) {
            if (!target) {
                target = this.$el.querySelector(".active");
            }
            this.sliderLeft = target.offsetLeft;
            this.sliderWidth = target.offsetWidth;
        },
        handleResize() {
            this.$nextTick(() => {
                this.updateSliderPosition();
            });
        },
        openModal(image) {
            this.enlargedImage = this.requireImage(image);
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
            this.enlargedImage = null;
        },
    },
};
</script>

<style scoped>
.max-width-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
}

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
    transition:
        left 0.4s ease,
        width 0.2s ease;
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

.gallery-title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 42px;
}

.gallery-video {
    width: 100%;
    max-width: 1200px;
    margin: auto;
}

/* Adjust the .gallery-container for video */
.gallery-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
}

.gallery-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    margin-left: 5px;
    margin-right: 5px;
}

.project-main-image {
    max-width: 80px;
    height: auto;
}

.summary-content p {
    text-indent: 40px; /* Indent paragraphs */
    text-align: justify;
    margin: 10px 0;
}

.summary-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 15px;
    word-wrap: break-word;
    overflow-wrap: break-word;
}

.summary-content ul {
    padding-left: 20px;
}

.summary-content li {
    margin-bottom: 5px;
}

.summary-content h1 {
    text-align: center;
    margin-bottom: 20px;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.enlarged-image {
    max-width: 80%;
    max-height: 80%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease-in-out;
}

/* Ensure that clicking the enlarged image doesn't close it */
.enlarged-image:hover {
    transform: scale(1.05);
}
</style>
