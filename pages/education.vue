<template>
  <CContainer align="start" class="page-education">
    <CLeftSection>
      <CNameContainer>
          <h1>Bachelor's Degree in New Media Development</h1>
          <p>2017 - 2020</p>
          <p>{{ getDurationString('2017-09-01', '2020-09-01') }}</p>
      </CNameContainer>

      <CImageContainer>
        <NuxtImg src="/images/artevelde_logo.png" class="artevelde-logo"/>
      </CImageContainer>
    </CLeftSection>

    <CRightSection>
      <CFlex column>
        <a href="/">
          <NuxtImg src="/icons/back.png" class="icon"/>
        </a>
        <h1>Education</h1>

        <CThreeFourths>
          I started my journey in the world of programming in the 5th year in secondary school, when i chose to study ICT.
          During the 5th and 6th year, I learned the basics of programming in C++ and C#. I immediately felt that programming
          was something that interested me. Besides the programming, we also had some electronics and networking classes.
          After I graduated, I decided to continue my studies in New Media Development at Artevelde University of Applied Sciences.
          Because I still felt an itch to do something more creative, I chose this study, because it had multiple paths to choose from.
          From graphic design to photography to web development. The first year was a bit of everything, but in the second year,
          I still chose to go for the web development path. I learned a lot about HTML, CSS, JavaScript, PHP, MySQL, Node.js, and React.
          I really enjoyed making mobile applications with React Native and headless backends with Laravel. After my Bachelor's degree
          I also studied Machine Learning & AI at Howest for a year from which I got a certificate.

        </CThreeFourths>

        <div class="timeline">
          <h1 style="margin-top: 0">Timeline</h1>
          <CFlex>
            <h2>September 2015</h2>
            <p>/ Started ICT studies @VTI Lokeren (Secondary school)</p>
          </CFlex>

          <div class="timeline-divider">
            {{ getDurationString('2015-09-01', '2017-09-01') }}
          </div>

          <CFlex>
            <h2>September 2017</h2>
            <p>/ Started New Media Development @Artevelde Hogeschool Gent</p>
          </CFlex>

          <div class="timeline-divider">
            {{ getDurationString('2017-09-01', '2020-10-01') }}
          </div>

          <CFlex>
            <h2>October 2020</h2>
            <p>/ Started AI@Home @Howest</p>
          </CFlex>

          <div class="timeline-divider">
            {{ getDurationString('2020-10-01', '2021-10-01') }}
          </div>

          <CFlex>
            <h2>October 2021</h2>
            <p>/ Finished AI@Home course</p>
          </CFlex>
        </div>
      </CFlex>
    </CRightSection>
  </CContainer>
</template>

<script setup lang="ts">
import CFlex from "~/components/CFlex.vue";
import {getDurationString} from "~/utils/main";

useSeoMeta({
  title: "Jan Temmerman | Education",
  description: "Jan Temmerman's personal website | Education",
})
</script>

<style lang="scss">
  .page-education {
    .c-image-container {
      padding: 1rem 5rem;
      background-color: black;

      .artevelde-logo {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  .icon {
    width: 3rem;
    height: 3rem;
    aspect-ratio: 1;
  }

  .timeline {
    padding: 2rem 3rem;
    background-color: white;
    align-self: start;

    .timeline-divider {
      border-left: 1px solid black;
      opacity: .5;
      padding: 1rem;
    }
  }
</style>