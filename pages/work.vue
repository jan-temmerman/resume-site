<template>
  <CContainer align="start" class="page-work">
    <CLeftSection>
      <CNameContainer>
        <h1>Front-end Web Developer</h1>
        <p>March 2021 - Present</p>
        <p>{{ getDurationString('2021-03-01') }}</p>
      </CNameContainer>

      <CImageContainer>
        <CWOTZ class="wotz-logo"/>
      </CImageContainer>
    </CLeftSection>

    <CRightSection>
      <CFlex column>
        <a href="/">
          <NuxtImg src="/icons/back.png" alt="back icon" class="icon"/>
        </a>
        <h1>Summary</h1>

        <CThreeFourths>
          At
          <a href="https://whoownsthezebra.be" class="link">Who Owns The Zebra</a>
          (Previously known as Next Apps) I mainly worked on one big project, called
          <a href="https://www.autodialog.com/" class="link">Autodialog</a>.
          A heavily interactive web application, built with Vue.js. I was part of a team of 3-5 developers. I regularly
          communicated with the client, the product owner, the project manager, designers and testers. Most of the
          project was written with typescript so that the code was self documenting and less bug prone. High coding
          standards, strict code reviews and clean code were top priorities for a project of this size. I started on
          this project as a junior developer fresh out of school so I had a lot to learn. During the first 3 years and
          7 months I had the privilege to have a mentor with a lot of experience. During his time on the project I
          learned a lot about clean code, design patterns, debugging and git. A few months after he left the project I
          took over his role as team lead.
        </CThreeFourths>

        <div class="timeline">
          <h1 style="margin-top: 0">Timeline</h1>
          <CFlex>
            <h2>March 2021</h2>
            <p>/ Junior Developer</p>
          </CFlex>

          <div class="timeline-divider">
            {{ getDurationString('2021-03-01', '2024-01-01') }}
          </div>

          <CFlex>
            <h2>January 2024</h2>
            <p>/ Medior Developer</p>
          </CFlex>

          <div class="timeline-divider">
            {{ getDurationString('2024-01-01', '2024-12-01') }}
          </div>

          <CFlex>
            <h2>December 2024</h2>
            <p>/ Team Lead</p>
          </CFlex>

          <div class="timeline-divider">
            {{ getDurationString('2024-12-01') }}
          </div>

          <h2>Present</h2>
        </div>
      </CFlex>
    </CRightSection>
  </CContainer>
</template>

<script setup lang="ts">
import CFlex from "~/components/CFlex.vue";
import CWOTZ from "~/components/CWOTZ.vue";
import {getDurationString} from "~/utils/main";

useSeoMeta({
  title: "Jan Temmerman | Work",
  description: "Jan Temmerman's personal website | Work experience",
})
</script>

<style lang="scss">
.page-work {
  .link {
    text-decoration: underline;

    &:hover {
      background-color: #1696fb;
    }
  }

  .c-image-container {
    padding: 1rem 5rem;
    background-color: black;

    .wotz-logo {
      color: white;
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
}
</style>