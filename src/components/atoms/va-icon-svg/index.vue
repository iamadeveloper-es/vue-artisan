<script lang="ts">
export default {
  name: 'va-icon-svg'
};
</script>
<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import VaSvg from '../../atoms/va-svg/index.vue';

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: '20px'
  },
  color: {
    type: String,
    default: 'dark-300'
  },
  borderColor: {
    type: String
  },
  title: {
    type: String
  },
  space: {
    type: String,
    default: ''
  }
});

const setSpace = computed(() => {
  return props.space ? `va-icon-svg--space-${props.space}` : '';
});

</script>

<template>
<div
class="va-icon-svg"
:style="[`--icon-size:${size}`]"
:class="[setSpace]"
>
  <VaSvg
  class="va-icon-svg__svg"
  :name="icon"
  :title="title"
  :fill="`var(--${color})`"
  :stroke="`var(--${borderColor})`"
  width="100%"
  />
</div>
<!-- .va-icon-svg(
  :style="[`--icon-size:${size}`]",
  :class="[setSpace]")
  va-svg.va-icon-svg__svg(
    :name="icon",
    :title="title",
    :fill="`var(--${color})`",
    :stroke="`var(--${borderColor})`",
    width="100%") -->
</template>

<style lang="scss">
@import 'index';
</style>
