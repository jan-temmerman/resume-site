<template>
  <div class="c-row" >
    <slot/>
  </div>
</template>

<style lang="scss">
.c-row {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;


  @media screen and (max-width: 1200px) {
  }
}
</style>