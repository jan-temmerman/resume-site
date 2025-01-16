<template>
  <CFlex class="c-container">
    <slot/>
  </CFlex>
</template>

<style lang="scss">
.c-container {
  height: 100vh;
  gap: 6rem;
  overflow: auto;

  h1 {
    font-size: 3em;
    font-weight: 600;
  }

  @media screen and (max-width: 1200px) {
    display: block;
  }
}
</style>
