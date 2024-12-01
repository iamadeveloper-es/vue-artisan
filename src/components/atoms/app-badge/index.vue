<script lang="ts">
export default {
  name: 'app-badge'
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
  const {count, maxCount} = props;
  return count && Number(count) < maxCount ? count : `${maxCount - 1}+`;
});

const setVariant = computed(() => {
  return `app-badge--${props.variant}`;
});

const setPosition = computed(() => {
  const validPositions = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
  return validPositions.includes(props.position) ? 
    props.position : 'top-right';
});

</script>

<template lang="pug">
span.app-badge(:class="[setVariant, `app-badge--${setPosition}`, {[`app-badge--hide-count-${setPosition}`]: hideCount}]")
  slot(name="content")
  span.app-badge__bubble(
    v-show="showBubble", 
    :class="{ 'animate': animation }")
    span.app-badge__count(v-if="!hideCount") {{setCount}}
</template>

<style lang="scss">
@import 'index';
</style>
