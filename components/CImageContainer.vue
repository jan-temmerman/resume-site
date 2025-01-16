<template>
  <div class="c-image-container">
    <slot/>
  </div>
</template>

<style lang="scss">
  .c-image-container {
    animation: 300ms fadeIn;
    position: relative;
    display: flex;
    flex: 1;
    background-color: rgba(195, 195, 195, 0.7);
    overflow: hidden;
  }
</style>
