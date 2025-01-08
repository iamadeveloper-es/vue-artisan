<script lang="ts">
export default {
  name: 'va-circular-progress'
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
  },
  ringColorInner: {
    type: String,
    default: 'va-neutral-600'
  },
  ringColorOuter: {
    type: String,
    default: 'va-danger'
  },
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

<template>
<div
class="va-circular-progress"
ref="progressElement"
role="progressbar"
:aria-valuenow="value"
>
  <span class="va-circular-progress__counter">{{value}} %</span>
  <svg
    class="progress-ring"
    viewBox="0 0 120 120"
    preserveAspectRatio="xMidYMid meet"
  >
    <circle
      class="progress-ring__circle"
      :style="`--progress-color-inner:var(--${ringColorInner})`"
      cx="50%"
      cy="50%"
      :r="radio"
    ></circle>
    <circle
      class="progress-ring__circle-progress"
      :style="`--progress-color-outer:var(--${ringColorOuter})`"
      cx="50%"
      cy="50%"
      :r="radio"
      :stroke-dasharray="strokeDashArray"
      :stroke-dashoffset="calcPercent"
    ></circle>
  </svg>
</div>
</template>

<style lang="scss">
@import 'index';
</style>
