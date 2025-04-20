<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Size } from '@/types';

defineOptions({
  name: 'va-avatar'
});

const props = defineProps({
  image: {
    type: String
  },
  name: {
    type: String,
    default: 'Avatar name'
  },
  alt: {
    type: String
  },
  text: {
    type: String
  },
  size: {
    type: String,
    default: 'xs'
  },
  clickable: {
    type: Boolean,
    default: false
  },
  isRounded: {
    type: Boolean,
    default: true
  },
  display: {
    type: String,
    validator (value) {
      return 'img' === value || 'name' === value;
    },
    default: 'img'
  },
  bgColor: {
    type: String
  },
  color: {
    type: String,
    default: 'va-white'
  },
  isBordered: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['clicked']);
const defaultSize: Size = 'md';
const imageError = ref(false);

const getBG = computed(() => {
  const colors = ['va-accent', 'va-info', 'va-success', 'va-warning', 'va-danger'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return props.bgColor ? props.bgColor : colors[randomIndex];
});

const initials = computed((): String => {
  const { name } = props;
  const firstChar = name.charAt(0).toUpperCase();
  const secondChar = name.split(' ')[1]?.charAt(0).toUpperCase();

  return secondChar ? `${firstChar}${secondChar}` : `${firstChar}`;
});

const isImageDisplay = computed(() => props.image && props.display === 'img' && !imageError.value);

const emitEvent = (ev: Event) => {
  emit('clicked', ev);
};

</script>

<template>
  <div
    class="va-avatar"
    :style="
      {width: `var(--va-size-${size}, var(--va-size-${defaultSize}))`,
      height: `var(--va-size-${size}, var(--va-size-${defaultSize}))`,
      color: isImageDisplay ? '' : `var(--${color})`,
      backgroundColor: isImageDisplay ? '' : `var(--${getBG})`,
      borderColor: !isBordered && !color ? '' : `var(--${color})`}"
    :class="[{ 'va-avatar--action': clickable, 'va-avatar--rounded': isRounded, 'va-avatar--bordered': isBordered }]"
    @click="emitEvent"
  >
    <img
      class="va-avatar__img"
      v-if="isImageDisplay && !text && !imageError"
      :src="image"
      :alt="alt ? alt : name"
      :class="{ circle: isRounded }"
      @error="imageError = true"
    />
    <span
      class="va-avatar__initials"
      v-else-if="display === 'name' || text"
      :style="{
        fontSize: `var(--va-text-${size}, var(--va-text-${defaultSize}))`,
        lineHeight: `var(--va-text-${size}, var(--va-text-${defaultSize}))`}"
    >
        <span class="va-avatar--truncate">{{ display === 'name' && !text ? initials : text }}</span>
    </span>
  </div>
</template>

<style lang="scss">
@use 'index';
</style>
