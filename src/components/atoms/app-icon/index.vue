<script lang="ts">
export default {
  name: 'app-icon'
};
</script>
<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  icon: {
    type: [Array, String],
    required: true
  },
  size: {
    type: Number,
    default: 20
  },
  variant: {
    type: String
  },
  onActiveIcon: {
    type: [Array, String]
  },
  isClicked: {
    type: Boolean,
    default: false
  }
});


const getVariant = computed(() => {
  const variant: string | undefined = props.variant;
  return variant?.length ? `app-icon--${variant}` : '';
});

const getIcon = computed(() => {
  const activeIcon = props.onActiveIcon;
  const icon = props.icon;
  const isClicked = props.isClicked;
  return isClicked && activeIcon?.length ? activeIcon : icon;
});

const emit = defineEmits(['iconClicked']);

const emitEvent = (ev: Event): void => {
  emit('iconClicked', ev);
};
</script>

<template lang="pug">
span.app-icon(
:class="[getVariant, getIcon]",
@click="emitEvent", 
:style="{'font-size': `${size}px`}")
</template>

<style lang="scss">
@import 'index';
</style>
