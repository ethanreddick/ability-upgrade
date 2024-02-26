<template>
    <div class="home-container">
        <!-- Picture on the left -->
        <div class="profile-pic">
            <img src="@/assets/picture.jpeg" alt="Ethan">
        </div>
        <!-- Blurb on the right -->
        <div class="profile-blurb">
            <h2>Welcome</h2>
            <p>This is a short blurb about who I am and the reason for making this site. Here you can introduce yourself,
                your profession, your goals with the site, and any other introductory information you wish to share.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
};
</script>

<style scoped>
.home-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    gap: 20px;
}

.profile-pic img {
    width: 100%;
    max-width: 300px;
    border-radius: 15px;
    /* Smoothed edges instead of a circular picture */
}

.profile-blurb {
    max-width: 600px;
    /* Adjust based on your content and preference */
}

@media (max-width: 768px) {
    .home-container {
        flex-direction: column;
    }
}
</style>
