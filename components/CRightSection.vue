<template>
  <div class="c-right-section">
    <slot/>
  </div>
</template>

<style lang="scss">
.c-right-section {
  animation: 300ms slideInFromBottom;
  flex: 1.25;
  padding: 8rem 0;

  @media screen and (max-width: 1200px) {
    overflow: hidden;
    padding: 3rem;
    padding-bottom: 6rem;
    height: unset;
  }
}
</style>
