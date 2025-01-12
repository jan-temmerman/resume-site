<template>
  <div class="c-flex" :class="classes">
    <slot/>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
  column?: boolean;
  wrap?: boolean;
  noGap?: boolean,
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  inline?: boolean;
}>();

const classes = computed(() => ({
  'c-flex-gap': !props.noGap,
  'c-flex-column': props.column,
  'c-flex-row': !props.column,
  'c-flex-wrap': props.wrap,
  'c-flex-inline': props.inline,
  [`c-flex-justify-${props.justify ?? 'start'}`]: true,
  [`c-flex-align-${props.align ?? (props.column ? 'stretch' : 'center')}`]: true,
}));
</script>

<style lang="scss">
.c-flex {
  display: flex;

  &-gap {
    gap: 0.5rem;
  }

  &-row {
    flex-direction: row;
    width: 100%;
  }

  &-column {
    flex-direction: column;
    height: 100%;
  }

  &-inline {
    display: inline-flex;
    width: auto;
  }

  &-wrap {
    flex-wrap: wrap;
  }

  &-justify-start {
    justify-content: flex-start;
  }

  &-justify-center {
    justify-content: center;
  }

  &-justify-end {
    justify-content: flex-end;
  }

  &-justify-between {
    justify-content: space-between;
  }

  &-justify-around {
    justify-content: space-around;
  }

  &-justify-evenly {
    justify-content: space-evenly;
  }

  &-align-start {
    align-items: flex-start;
  }

  &-align-center {
    align-items: center;
  }

  &-align-end {
    align-items: flex-end;
  }

  &-align-stretch {
    align-items: stretch;
  }

  &-align-baseline {
    align-items: baseline;
  }
}
</style>