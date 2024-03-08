<template>
    <div class="max-width-container">
        <div v-if="blogPost">
            <div class="blog-detail-container">
                <h1>{{ blogPost.title }}</h1>
                <p>{{ blogPost.descriptionLong }}</p>
            </div>
        </div>
        <div v-else>
            <p>Blog post not found.</p>
        </div>
    </div>
</template>

<script>
import { blogPosts } from '@/data/blogPostsData.js';

export default {
    props: ['postId'],
    data() {
        return {
            blogPost: null,
        };
    },
    mounted() {
        this.fetchBlogPostDetails();
    },
    methods: {
        fetchBlogPostDetails() {
            const blogPost = blogPosts.find(post => post.id === this.postId);
            if (blogPost) {
                this.blogPost = blogPost;
            }
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

.blog-detail-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.blog-detail-container h1 {
    text-align: center;
    margin-bottom: 20px;
}

.blog-detail-container p {
    text-align: justify;
    max-width: 800px;
    margin: 20px 0;
    padding: 0 15px;
}
</style>
