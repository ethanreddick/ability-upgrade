<template>
    <div class="blog-page-wrapper">
        <div class="blog-page-container">
            <div class="sidebar">
                <div class="categories-bubble">
                    <h2>Categories</h2>
                    <button class="category-item">Category 1</button>
                    <button class="category-item">Category 2</button>
                    <button class="clear-filters">Clear Filters</button>
                </div>
            </div>
            <div class="blog-listings">
                <div class="controls-bubble">
                    <input type="text" placeholder="Search..." class="search-input" />
                    <select class="sort-dropdown">
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                    </select>
                    <select class="show-per-page-dropdown" v-model="postsPerPage" @change="changePostsPerPage">
                        <option value="10">10 per page</option>
                        <option value="20">20 per page</option>
                    </select>
                </div>

                <div class="pagination-controls">
                    <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1"
                        class="arrow-button">&#8592;</button>
                    <button v-for="page in totalPages" :key="page" @click="changePage(page)"
                        :class="{ 'page-button': true, 'active-page': currentPage === page }">{{ page }}</button>
                    <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages"
                        class="arrow-button">&#8594;</button>
                </div>

                <div class="content-listings">
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

                <div class="pagination-controls">
                    <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">Previous</button>
                    <button v-for="page in totalPages" :key="page" @click="changePage(page)"
                        :class="{ 'active-page': currentPage === page }">{{ page }}</button>
                    <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">Next</button>
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
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.blogPosts.length / this.postsPerPage);
        },
        paginatedBlogPosts() {
            const start = (this.currentPage - 1) * this.postsPerPage;
            const end = start + this.postsPerPage;
            return this.blogPosts.slice(start, end);
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

.categories-bubble,
.controls-bubble {
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-bottom: 20px;
    width: 100%;
    /* Make sure these elements take the full width of their container */
}

.category-item,
.clear-filters {
    display: block;
    margin: 10px 0;
    cursor: pointer;
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

.search-input,
.sort-dropdown,
.show-per-page-dropdown {
    margin: 0 10px;
    padding: 8px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
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
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 10px 0;
    padding: 10px;
    width: 100%;
    /* Blog details match the controls bubble width */
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
