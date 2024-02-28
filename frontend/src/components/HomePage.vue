<template>
    <div class="max-width-container">
        <div class="home-container">
            <!-- Picture on the left -->
            <div class="profile-pic">
                <img src="../assets/hereICome.png" alt="Ethan">
            </div>
            <!-- Blurb on the right -->
            <div class="profile-blurb">
                <h2>Welcome!</h2>
                <p>My name is Ethan Reddick and this is my personal site that I use for my blog and to showcase
                    some of my projects. I am a newly commissioned Cyber officer in the Georgia Army National Guard who
                    loves building things with software and keeping them safe.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
};
</script>

<style scoped>
.max-width-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
}

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
