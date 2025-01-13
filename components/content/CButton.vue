<template>
  <button class="c-button" @click="gotoLink">
    <slot/>
  </button>
</template>

<script setup lang="ts">
import {navigateTo} from "#app";

const props = defineProps<{
  link: string;
}>();

function gotoLink() {
  navigateTo(props.link);
}
</script>

<style lang="scss">
.c-button {
  display: inline-block;
  padding: 0rem 3rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: black;
  border: none;
  cursor: pointer;
  transition: box-shadow ease 0.2s;

  &:hover {
    box-shadow: 0 0 20px #1696fb inset;
  }
}
</style>