<template>
  <div class="threeFourths">
    <slot/>
  </div>
</template>

<style lang="scss">
.threeFourths {
  position: relative;
  width: 75%;
  margin-bottom: 3rem;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
}
</style>