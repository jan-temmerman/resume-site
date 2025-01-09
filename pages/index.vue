<template>
  <div class="container">
    <ContentRenderer v-if="home" :value="home" />
    <div v-else>Home not found</div>
  </div>
</template>

<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>

<style>
.container {
  width: 100%;
  height: 100%;
  padding: 1rem 4rem;
}

h1 {
  font-weight: 500;
}
</style>
