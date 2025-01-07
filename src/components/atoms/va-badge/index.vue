<script lang="ts">
export default {
  name: 'va-badge'
};
</script>
<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  showBubble: {
    type: Boolean,
    default: true
  },
  animation: {
    type: Boolean,
    default: true
  },
  hideCount: {
    type: Boolean,
    default: false
  },
  count: {
    type: Number
  },
  maxCount: {
    type: Number,
    default: 100
  },
  variant: {
    type: String,
    default: 'danger'
  },
  position: {
    type: String,
    default: 'top-right'
  }
});

const setCount = computed(() => {
  const { count, maxCount } = props;
  return count && Number(count) < maxCount ? count : `${maxCount - 1}+`;
});

const setVariant = computed(() => {
  return `va-badge--${props.variant}`;
});

const setPosition = computed(() => {
  const validPositions = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
  return validPositions.includes(props.position) ?
    props.position : 'top-right';
});

</script>

<template>
  <span
    class="va-badge"
    :class="[setVariant, `va-badge--${setPosition}`, { [`va-badge--hide-count-${setPosition}`]: hideCount }]"
  >
    <slot name="content"></slot>
    <span
      class="va-badge__bubble"
      v-show="showBubble"
      :class="{ 'animate': animation }"
    >
      <span
      class="va-badge__count"
      v-if="!hideCount"
      >{{ setCount }}</span>
    </span>
  </span>
</template>

<style lang="scss">
@import 'index';
</style>
