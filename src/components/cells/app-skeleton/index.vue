<script lang="ts">
export default {
  name: 'app-skeleton'
};
</script>

<script lang="ts" setup>
import { computed, type PropType } from 'vue';

type SkeletonType = 'rect' | 'circle'
type SkeletonAnimation = 'wave' | 'pulse'

const props = defineProps({
  variant: {
    type: String as PropType<SkeletonType>,
    default: 'rect'
  },
  sWidth: {
    type: String,
    default: '100%'
  },
  sHeight: {
    type: String,
    default: '10px'
  },
  bRadius: {
    type: String,
    default: '0'
  },
  animation: {
    type: String as PropType<SkeletonAnimation>,
    default: 'wave'
  }
});
</script>

<template lang="pug">
span.app-skeleton(
  :class="[`app-skeleton--${variant}`, `animation-${animation}`]",
  :style="[`--skeleton-width:${sWidth}`, `--skeleton-height:${sHeight}`, `--skeleton-border-radius:${bRadius}`]")
</template>

<style lang="scss">
@use 'index';
</style>