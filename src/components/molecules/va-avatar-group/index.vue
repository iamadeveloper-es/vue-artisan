<script lang="ts" setup>
import type { Size } from '@/types';
import { useSlots, computed } from 'vue';

defineOptions({
  name: 'va-avatar-group'
});

const props = defineProps({
  maxCount: {
    type: Number
  },
  isDisabled: {
    type: Boolean,
    default: false
  },
  bgMaxCount: {
    type: String,
    default: 'va-darken-300'
  },
  colorMaxCount: {
    type: String,
    default: 'va-white'
  }
});

const slots = useSlots();
const defaultSize: Size = 'md';

// Contar los elementos que vienen dentro del slot default
const slotChildren = computed(() => {
  const vnodes = slots.default?.() || [];
  console.log(vnodes.filter(v => v.type !== Comment)[0]?.children);
  return vnodes.filter(v => v.type !== Comment)[0]?.children;
});

const slotChildrenSize = computed(() => {
  const data = slotChildren.value?.slice(-1);
  return data[0].props.size;
});

// Ejemplo: limitar a máximo 3 elementos visibles
const visibleChildren = computed(() => {
  return slotChildren.value?.slice(0, props.maxCount);
});
</script>

<template>
  <div class="va-avatar-group"
  :class="{'va-avatar-group--active': !isDisabled}">
    <component
      v-for="(child, index) in visibleChildren"
      :key="index"
      :is="child"
    />
    <div class="va-avatar-group__count" v-if="maxCount && maxCount < slotChildren?.length"
    :style="
      {width: `var(--va-size-${slotChildrenSize}, var(--va-size-${defaultSize}))`,
      height: `var(--va-size-${slotChildrenSize}, var(--va-size-${defaultSize}))`,
      color: `var(--${colorMaxCount})`,
      backgroundColor: `var(--${bgMaxCount})`}">
      <span class="va-avatar-group__initials"
      :style="{
        fontSize: `var(--va-text-${slotChildrenSize}, var(--va-text-${defaultSize}))`,
        lineHeight: `var(--va-text-${slotChildrenSize}, var(--va-text-${defaultSize}))`}">
        <span>+{{ slotChildren?.length - maxCount}}</span>
      </span>
    </div>
  </div>
</template>

<style lang="scss">
@use 'index';
</style>
