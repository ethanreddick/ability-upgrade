<template>
    <div class="counter">
        {{ message }}
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            message: 'Loading...',
        };
    },
    async mounted() {
        try {
            const response = await fetch('/api/visits');
            const text = await response.text();
            this.message = text;
        } catch (error) {
            console.error("Failed to fetch visit count:", error);
            this.message = "Failed to load visit count.";
        }
    },
};
</script>

<style>
.counter {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 20px;
}
</style>
