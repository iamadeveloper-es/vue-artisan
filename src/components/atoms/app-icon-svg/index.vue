<script lang="ts">
export default {
  name: 'app-icon-svg'
};
</script>
<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import AppSvg from '../../atoms/app-svg/index.vue';

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
  return props.space ? `app-icon-svg--space-${props.space}` : '';
});

</script>

<template lang="pug">
.app-icon-svg(
  :style="[`--icon-size:${size}`]", 
  :class="[setSpace]")
  app-svg.app-icon-svg__svg(
    :name="icon", 
    :title="title", 
    :fill="`var(--${color})`", 
    :stroke="`var(--${borderColor})`", 
    width="100%")
</template>

<style lang="scss">
@import 'index';
</style>
