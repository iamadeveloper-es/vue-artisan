<script lang="ts">
export default {
  name: 'app-circular-progress'
};
</script>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

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
    type: String,
    default: '80px'
  },
  height: {
    type: String,
    default: '80px'
  },
  radio: {
    type: Number,
    default: 50
  }
});

const progressElement = ref(null);

const updateStyle = () => {
  progressElement.value?.style.setProperty('--progress-width', props.width ? props.width : '120px');
  progressElement.value?.style.setProperty('--progress-height', props.width ? props.width : '120px');
};

const strokeDashArray = computed(() => 2 * Math.PI * props.radio);

const calcPercent = computed(() => {
  return strokeDashArray.value * (1 - props.value/100);
});

onMounted(() => {
  updateStyle();
});

</script>

<template lang="pug">
.app-circular-progress(
ref="progressElement", 
role="progressbar", 
:aria-valuenow="value")
  span.app-circular-progress__counter {{value}} %
  svg.progress-ring(
    viewBox="0 0 120 120",
    preserveAspectRatio="xMidYMid meet")
    circle.progress-ring__circle(
      cx="50%",
      cy="50%",
      :r="radio")
    circle.progress-ring__circle-progress(
      cx="50%",
      cy="50%",
      :r="radio",
      :stroke-dasharray="strokeDashArray",
      :stroke-dashoffset="calcPercent")

</template>

<style lang="scss">
@import 'index';
</style>
