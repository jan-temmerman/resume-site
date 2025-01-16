<template>
  <CFlex column class="c-left-section">
    <slot/>
  </CFlex>
</template>


<style lang="scss">
  .c-left-section {
    flex: .75;
    max-width: 600px;
    gap: 0;
    position: sticky;
    top: 0;

    @media screen and (max-width: 1200px) {
      position: unset;
      width: 100vw;
      height: 100vh;
      & > * {
        flex: 1
      }
    }
  }
</style>
