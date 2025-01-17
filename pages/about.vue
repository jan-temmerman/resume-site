<template>
  <CContainer align="start" class="page-about">
    <CLeftSection>
      <CNameContainer>
        <h1>About me</h1>
        <p>Birthed: March 17th 1999</p>
        <p>Age: {{ getDurationString('1999-03-17') }}</p>
      </CNameContainer>

      <ClientOnly>
        <CImageContainer :style="`background-image: url('/images/${sport}_placeholder.png')`">
            <img :src="`/images/${sport}.gif`" loading="lazy" alt="Jan doing some sport" class="sport-image"/>
        </CImageContainer>
      </ClientOnly>
    </CLeftSection>

    <CRightSection>
      <a href="/">
        <NuxtImg src="/icons/back.png" alt="back icon" class="icon"/>
      </a>
      <ContentRenderer v-if="about" :value="about" />
    </CRightSection>
  </CContainer>
</template>

<script setup lang="ts">
import _ from "lodash";
import {getDurationString} from "~/utils/main";

const { data: about } = await useAsyncData(() => queryCollection('content').path('/about').first())

const sport = _.sample(['swim', 'run', 'gym', 'bike']);

useSeoMeta({
  title: "Jan Temmerman | About",
  description: "Jan Temmerman's personal website | About me",
})
</script>

<style lang="scss">
.page-about {
  .sport-image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
</style>