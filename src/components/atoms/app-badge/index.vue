<script lang="ts">
export default {
  name: 'app-badge'
};
</script>
<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  dot: {
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
    default: 'primary-blue'
  }
});

const setCount = computed(() => {
  const {count, maxCount} = props;
  return count && Number(count) < maxCount ? count : `+${maxCount - 1}`;
});

const setVariant = computed(() => {
  return `app-badge--${props.variant}`;
});

</script>

<template lang="pug">
span.app-badge
  slot(name="content")
  span.app-badge__buble(:class="[setVariant, {'is-dot': dot}]")
    span.app-badge__count(v-if="!dot") {{setCount}}
</template>

<style lang="scss">
@import 'index';
</style>
