<template>
  <div class="container">
    <div class="left-section">
      <div class="image-container">
        <NuxtImg src="/images/profileImage.jpg" class="profile-image"/>
      </div>

      <div class="name-container">
        <ContentRenderer v-if="name" :value="name" />
      </div>
    </div>

    <div class="right-section">
      <ContentRenderer v-if="home" :value="home" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())
const { data: name } = await useAsyncData('name', () => queryCollection('content').path('/name').first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>

<style>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;
  overflow: scroll;

  h1 {
    font-size: 3em;
    font-weight: 600;
  }

  .left-section {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    flex: .75;

    .image-container {
      position: relative;
      display: flex;
      flex: 1;
      background-color: rgba(195, 195, 195, 0.7);
      overflow: hidden;

      .profile-image {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    .name-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      background-color: white;
      height: 100%;

      h1 {
        margin: 0;
      }
    }
  }

  .right-section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1.25
  }
}

h1 {
  font-weight: 500;
}

@media screen and (max-width: 1200px) {
  .container {
    display: block;

    .left-section {
      width: 100vw;
      height: 100vh;
      & > * {
        flex: 1
      }
    }

    .right-section {
      padding: 3rem;
    }
  }
}
</style>
