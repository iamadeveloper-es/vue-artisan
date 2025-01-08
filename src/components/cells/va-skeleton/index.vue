<script lang="ts">
export default {
  name: 'va-skeleton'
};
</script>

<script lang="ts" setup>

type SkeletonType = 'rect' | 'circle'
type SkeletonAnimation = 'wave' | 'pulse'

defineProps({
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

<template>
<span
class="va-skeleton"
:class="[`va-skeleton--${variant}`, `animation-${animation}`]"
:style="[`--skeleton-width:${sWidth}`, `--skeleton-height:${sHeight}`, `--skeleton-border-radius:${bRadius}`]"
>
</span>
</template>

<style lang="scss">
@use 'index';
</style>
