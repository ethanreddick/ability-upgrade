<template>
    <div class="blog-page-wrapper">
        <div class="blog-page-container">
            <div class="sidebar">
                <!-- Category Selector -->
                <div class="categories-bubble">
                    <h2>Categories</h2>
                    <div v-for="tag in availableTags" :key="tag" class="category-item">
                        <input type="checkbox" :id="tag" :value="tag" v-model="selectedTags">
                        <label :for="tag">{{ tag }}</label>
                    </div>
                    <button class="clear-filters" @click="clearFilters">Clear Filters</button>
                </div>
            </div>
            <div class="blog-listings">
                <!-- Display Preference Controls -->
                <div class="controls-bubble">
                    <div class="search-container">
                        <input type="text" placeholder="Search..." class="search-input" />
                        <i class="fa fa-search search-icon"></i>
                    </div>
                    <div class="sort-container">
                        <label for="sort-dropdown">Sort by</label>
                        <select id="sort-dropdown" class="sort-dropdown">
                            <option value="newest">Newest First</option>
                            <option value="oldest">Oldest First</option>
                        </select>
                    </div>
                    <div class="show-per-page-container">
                        <label for="show-per-page-dropdown">Show per page</label>
                        <select id="show-per-page-dropdown" class="show-per-page-dropdown" v-model="postsPerPage"
                            @change="changePostsPerPage">
                            <option value="10">10</option>
                            <option value="20">20</option>
                        </select>
                    </div>
                </div>
                <!-- Top Pagination Controls -->
                <div v-if="paginatedBlogPosts.length > 0" class="pagination-controls">
                    <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1"
                        class="arrow-button">&#8592;</button>
                    <button v-for="page in totalPages" :key="page" @click="changePage(page)"
                        :class="{ 'page-button': true, 'active-page': currentPage === page }">{{ page }}</button>
                    <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages"
                        class="arrow-button">&#8594;</button>
                </div>
                <!-- Blog Post Listings -->
                <div class="content-listings">
                    <div v-if="paginatedBlogPosts.length > 0">
                        <div v-for="blogPost in paginatedBlogPosts" :key="blogPost.id" class="blog-detail-style">
                            <div class="blog-image-container">
                                <img :src="require(`@/assets/${blogPost.imageName}`)" alt="Blog Image"
                                    class="blog-main-image" />
                            </div>
                            <div class="blog-content">
                                <h1>{{ blogPost.title }}</h1>
                                <p>{{ blogPost.description }}</p>
                                <p>{{ blogPost.date }}</p>
                            </div>
                        </div>
                    </div>
                    <p v-else class="no-posts-message">No blog posts matching those filters.</p>
                </div>
                <!-- Bottom Pagination Controls -->
                <div v-if="paginatedBlogPosts.length > 0" class="pagination-controls">
                    <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1"
                        class="arrow-button">&#8592;</button>
                    <button v-for="page in totalPages" :key="page" @click="changePage(page)"
                        :class="{ 'page-button': true, 'active-page': currentPage === page }">{{ page }}</button>
                    <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages"
                        class="arrow-button">&#8594;</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { blogPosts } from '@/data/blogPostsData.js';

export default {
    name: 'BlogPage',
    data() {
        return {
            blogPosts,
            currentPage: 1,
            postsPerPage: 10,
            availableTags: ["Vue.js", "Reactivity", "Rust", "Javascript", "Python"],
            selectedTags: [],
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.filteredBlogPosts.length / this.postsPerPage);
        },
        filteredBlogPosts() {
            if (this.selectedTags.length === 0) {
                return this.blogPosts;
            }
            return this.blogPosts.filter(post => post.tags.some(tag => this.selectedTags.includes(tag)));
        },
        paginatedBlogPosts() {
            const start = (this.currentPage - 1) * this.postsPerPage;
            const end = start + this.postsPerPage;
            return this.filteredBlogPosts.slice(start, end);
        },
    },
    methods: {
        changePage(page) {
            if (page < 1 || page > this.totalPages) return;
            this.currentPage = page;
        },
        changePostsPerPage() {
            this.currentPage = 1; // Reset to the first page to avoid empty page views
        },
        clearFilters() {
            this.selectedTags = [];
        },
    },
};
</script>

<style scoped>
.active-page {
    background-color: #ddd;
    /* or any color that indicates an active state */
    border-color: #bbb;
    /* slightly darker border for contrast */
}

.blog-page-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
}

.no-posts-message {
    text-align: center;
    padding: 20px;
    font-size: 1.0em;
    color: #666;
}

.categories-bubble {
    border-radius: 15px;
    /* Rounded corners for the bubble effect */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    /* Subtle shadow for 3D effect */
    padding: 20px;
    /* Spacing inside the bubble */
    margin-bottom: 20px;
    /* Space below the bubble */
    width: 100%;
    /* Full width of its container */
    display: flex;
    /* Flexbox for internal alignment */
    flex-direction: column;
    /* Stack items vertically */
}

.blog-page-container {
    display: flex;
    max-width: 1280px;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
}

.sidebar {
    width: 25%;
    margin-right: 20px;
    /* Ensure space between sidebar and blog listings */
}

.controls-bubble {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-bottom: 20px;
    width: 100%;
}

.search-container,
.sort-container,
.show-per-page-container {
    display: flex;
    align-items: center;
}

.category-item {
    display: flex;
    align-items: center;
    margin: 10px 0;
}

.category-item input[type="checkbox"] {
    margin-right: 5px;
}

.sort-dropdown,
.show-per-page-dropdown {
    margin: 0 10px;
    padding: 8px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.blog-listings {
    flex: 1;
    /* Take the remaining space */
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75%;
    /* Ensure blog listings don't exceed 75% of the container width */
}

.search-input {
    margin-right: 10px;
    /* Adjust spacing */
    padding: 8px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    flex-grow: 1;
    /* Allows the search input to fill the space */
}

.search-icon {
    color: #ccc;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
}


.pagination-controls {
    display: flex;
    justify-content: center;
    align-items: center;
}

.page-button,
.arrow-button {
    padding: 5px 15px;
    /* Adjusted for a pill-shaped design */
    margin: 0 5px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 20px;
    /* Adjusted for a pill-shaped design */
    cursor: pointer;
    text-align: center;
}

.arrow-button {
    display: flex;
    justify-content: center;
    align-items: center;
}

.arrow-button:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
    color: #aaa;
    /* Shades the arrow when disabled */
}

.content-listings {
    width: 100%;
    /* Ensure listings use the full width */
}

.blog-detail-style {
    display: flex;
    /* Match this color with the project bubble color */
    border-radius: 15px;
    /* Match the border-radius from ProjectsPage.vue */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    /* Initial shadow */
    margin: 10px 0;
    padding: 10px;
    width: 100%;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    /* Smooth transition for hover effect */
}

.blog-detail-style:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    /* Enhanced shadow for raised effect */
    transform: translateY(-5px);
    /* Slightly lift the element */
}

.blog-image-container {
    margin-right: 20px;
}

.blog-main-image {
    width: 100px;
    height: auto;
    border-radius: 10px;
}

.blog-content {
    display: flex;
    flex-direction: column;
}

.blog-date {
    font-size: 0.9em;
    color: #666;
    /* Add space between description and dates */
}
</style>
