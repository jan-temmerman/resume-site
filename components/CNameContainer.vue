<template>
  <CFlex column align="center" justify="center" noGap class="c-name-container">
    <div style="padding: 3rem">
      <slot/>
    </div>
  </CFlex>
</template>

<style lang="scss">
  .c-name-container {
    flex: 1;
    background-color: white;
    height: 100%;
    max-width: 100%;

    h1 {
      margin: 0;
      margin-bottom: 1rem;
    }

    p {
      margin: 0;
      width: 100%;
    }

    & > * {
      animation: 300ms slideInFromBottom;
    }
  }
</style>
<script setup lang="ts">
</script>