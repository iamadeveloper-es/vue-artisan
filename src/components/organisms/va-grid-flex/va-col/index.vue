<script lang="ts">
export default {
  name: 'va-col'
};
</script>

<script lang="ts" setup>
import { computed } from 'vue';


const props = defineProps({
  col: {
    type: Number,
    default: 12
  },
  sm: {
    type: Number
  },
  md: {
    type: Number
  }
});

const setBreakpoints = computed(() => {
  const breakpoints = ['sm', 'md'];
  return breakpoints.filter((media) => props[media]).map((item) => `va-col--${item}-${props[item]}`);
});
</script>

<template>

<div class="va-col" :class="[`va-col--${col}`, setBreakpoints]">
  <slot></slot>
</div>
</template>

<style lang="scss">
// @use 'index';
</style>
