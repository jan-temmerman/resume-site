<template>
  <CContainer class="page-home">
    <CLeftSection>
      <CImageContainer>
        <NuxtImg src="/images/profileImage.jpg" class="profile-image"/>
      </CImageContainer>

      <CNameContainer>
        <ContentRenderer v-if="name" :value="name" />
      </CNameContainer>
    </CLeftSection>

    <CRightSection>
      <ContentRenderer v-if="home" :value="home" />
    </CRightSection>
  </CContainer>
</template>

<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())
const { data: name } = await useAsyncData('name', () => queryCollection('content').path('/name').first())

useSeoMeta({
  title: "Jan Temmerman | Home",
  description: "Jan Temmerman's personal website",
})
</script>

<style>
.page-home {
  .profile-image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
</style>
