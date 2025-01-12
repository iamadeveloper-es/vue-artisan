<script lang="ts">
export default {
  name: 'va-progress-bar'
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
  valuemax: {
    type: Number,
    default: 100
  },
  valuemin: {
    type: Number,
    default: 20
  },
  size: {
    type: String,
    default: 'xs'
  },
  showCounter: {
    type: Boolean,
    default: false
  },
  ariaLabel: {
    type: String,
    default: 'Barra de progreso'
  },
  textColor: {
    type: String,
    default: 'va-white'
  },
  bgColor: {
    type: String,
    default: 'va-neutral-600'
  },
  progressBgColor: {
    type: String,
    default: 'va-accent'
  }
});

const setValue = computed(() => {
  return props.value <= props.valuemax ? props.value : props.valuemax;
});

</script>

<template>
<div
class="va-progress"
role="range"
:aria-valuemax="valuemax"
:aria-valuenow="setValue"
:aria-label="ariaLabel"
:valuemin="valuemin"
:class="[`va-progress--${size}`]"
:style="[`--progress-value:${setValue}%`, `--progress-bg-color:var(--${progressBgColor})`, `--bar-bg-color:var(--${bgColor})`, `--text-color:var(--${textColor})`]"
>
  <span
    class="va-progress__counter"
    v-if="showCounter"
    >{{ `${setValue}%` }}</span>
</div>
</template>

<style lang="scss">
@import 'index';
</style>
