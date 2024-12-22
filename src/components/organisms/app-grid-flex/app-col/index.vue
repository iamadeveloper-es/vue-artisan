<script lang="ts">
export default {
  name: 'app-col'
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
  return breakpoints.filter((media) => props[media]).map((item) => `app-col--${item}-${props[item]}`);
});
</script>

<template lang="pug">
.app-col(:class="[`app-col--${col}`, setBreakpoints]")
  slot
</template>

<style lang="scss">
// @use 'index';
</style>