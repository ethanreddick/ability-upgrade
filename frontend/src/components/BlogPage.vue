<template>
    <div class="blog-page-wrapper">
        <div class="blog-page-container">
            <div class="sidebar">
                <!-- Category Selector -->
                <div class="categories-bubble">
                    <h2>Categories</h2>
                    <div class="clear-filters-container">
                        <button class="clear-filters" @click="clearFilters">Clear Filters</button>
                    </div>
                    <div v-for="tag in availableTags" :key="tag" class="category-item">
                        <input type="checkbox" :id="tag" :value="tag" v-model="selectedTags">
                        <label :for="tag">{{ tag }}</label>
                    </div>
                </div>
            </div>

            <div class="blog-listings">
                <!-- Display Preference Controls -->
                <div class="controls-bubble">
                    <div class="search-container">
                        <input type="text" placeholder="Search..." class="search-input" v-model="searchQuery" />
                        <i class="fa fa-search search-icon"></i>
                    </div>
                    <div class="sort-container">
                        <label for="sort-dropdown">Sort by</label>
                        <select id="sort-dropdown" class="sort-dropdown" v-model="sortOrder" @change="updateSortOrder">
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
                                <p>{{ formatDate(blogPost.date) }}</p>
                            </div>
                        </div>
                    </div>
                    <p v-else class="no-posts-message">No blog posts match those filters.</p>
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
            availableTags: ["Security", "Networking", "News"],
            selectedTags: [],
            searchQuery: '',
            sortOrder: 'newest', // default sort order
        };
    },

    computed: {
        totalPages() {
            return Math.ceil(this.filteredBlogPosts.length / this.postsPerPage);
        },
        filteredBlogPosts() {
            let filtered = this.blogPosts;

            // Filter by tags
            if (this.selectedTags.length > 0) {
                filtered = filtered.filter(post => post.tags.some(tag => this.selectedTags.includes(tag)));
            }

            // Filter by search query
            if (this.searchQuery) {
                filtered = filtered.filter(post =>
                    post.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                    post.description.toLowerCase().includes(this.searchQuery.toLowerCase())
                );
            }

            // Sort by date
            filtered = filtered.sort((a, b) => {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                return this.sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
            });

            return filtered;
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
        updateSortOrder(event) {
            this.sortOrder = event.target.value;
        },
        formatDate(dateString) {
            const date = new Date(dateString);

            // Extracting individual parts of the date
            const year = date.getFullYear();
            const month = date.toLocaleString('en-US', { month: 'long' });
            const day = date.getDate() + 1;

            // Determining the suffix of the day
            let suffix = 'th';
            if (day < 11 || day > 20) {
                switch (day % 10) {
                    case 1: suffix = 'st'; break;
                    case 2: suffix = 'nd'; break;
                    case 3: suffix = 'rd'; break;
                }
            }

            // Constructing the formatted date string manually
            return `${month} ${day}${suffix}, ${year}`;
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

.clear-filters-container {
    margin-bottom: 10px;
    /* Spacing below the button */
    text-align: left;
    /* Center the button if needed */
}

.clear-filters {
    background-color: #ffffff;
    /* White background */
    border: 1px solid #ccc;
    /* Light grey border */
    border-radius: 20px;
    /* Rounded edges for bubble shape */
    padding: 5px 15px;
    /* Padding for smaller button size */
    cursor: pointer;
    /* Cursor changes to pointer on hover */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    /* Subtle shadow for 3D effect */
    font-size: 0.9em;
    /* Smaller font size */
    color: #333;
    /* Darker font color for contrast */
    transition: background-color 0.3s, transform 0.2s;
    /* Smooth transition for hover effects */
}

.clear-filters:hover {
    background-color: #e6e6e6;
    /* Slightly darker background on hover */
    transform: translateY(-2px);
    /* Lift the button on hover */
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
