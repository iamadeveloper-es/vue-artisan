<script lang="ts">
export default {
  name: 'app-circular-progress'
};
</script>
<script setup lang="ts">
import { computed } from 'vue';


const props = defineProps({
  modelValue: {
    type: Number,
    default: 0
  },
  value: {
    type: Number,
    default: 0
  },
  width: {
    type: Number,
    default: 60
  },
  height: {
    type: Number,
    default: 60
  },
  cx: {
    type: Number,
    default: 60
  },
  cy: {
    type: Number,
    default: 60
  },
  radio: {
    type: Number,
    default: 50
  }
});

const setCX = computed(() => props.width / 2);

const setCY = computed(() => props.height / 2);

const strokeDashArray = computed(() => {
  return 2 * Math.PI * props.radio;
});

const calcPercent = computed(() => {
  return strokeDashArray.value * (1 - props.value/100);

});

</script>

<template lang="pug">
.app-circular-progress
  span.app-circular-progress__counter 10
  svg.progress-ring(
    :viewBox="0, 0, width, height",
    :width="width * 2", 
    :height="height * 2")
      circle.progress-ring__circle(
        :cx="setCX",
        :cy="setCY",
        :r="radio")
      circle.progress-ring__circle-progress(
        :cx="setCX",
        :cy="setCY",
        :r="radio",
        :stroke-dasharray="strokeDashArray",
        :stroke-dashoffset="calcPercent")
</template>

<style lang="scss">
@import 'index';
</style>
