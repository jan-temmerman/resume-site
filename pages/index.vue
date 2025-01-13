<template>
  <CFlex class="container">
    <CFlex column class="left-section">
      <div class="image-container">
        <NuxtImg src="/images/profileImage.jpg" class="profile-image"/>
      </div>

      <div class="name-container">
        <ContentRenderer v-if="name" :value="name" />
      </div>
    </CFlex>

    <div class="right-section">
      <ContentRenderer v-if="home" :value="home" />
    </div>
  </CFlex>
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
@keyframes slideInFromBottom {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.container {
  height: 100vh;
  gap: 6rem;
  overflow: auto;

  h1 {
    font-size: 3em;
    font-weight: 600;
  }

  .left-section {
    flex: .75;
    max-width: 600px;
    gap: 0;
    position: sticky;
    top: 0;

    .image-container {
      animation: 300ms fadeIn;
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
      max-width: 100%;
      padding: 3rem;
      box-sizing: border-box;

      h1 {
        margin: 0;
      }

      & > * {
        animation: 300ms slideInFromBottom;
      }
    }
  }

  .right-section {
    animation: 300ms slideInFromBottom;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1.25;
    top:0;
    padding: 8rem 0;
  }
}

h1 {
  font-weight: 500;
}

@media screen and (max-width: 1200px) {
  .container {
    display: block;

    .left-section {
      position: unset;
      width: 100vw;
      height: 100vh;
      & > * {
        flex: 1
      }
    }

    .right-section {
      overflow: hidden;
      padding: 3rem;
      padding-bottom: 6rem;
      height: unset;
    }
  }
}
</style>
