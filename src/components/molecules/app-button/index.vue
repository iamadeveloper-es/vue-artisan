<script lang="ts">
export default {
  name: 'app-button'
};
</script>
<script setup lang="ts">
import { computed, ref, type PropType } from 'vue';
import AppIcon from '../../atoms/app-icon/index.vue';
import { useComponentFunctions } from '../../../composables/component-functions';

type Variant = 'transparent' | 'outline' | 'regular' | 'small' | 'big' | 'full-width' | 'round-regular' | 'round-medim' | 'round-big'
type IconPosition = 'left' | 'right'

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'button'
  },
  variant: {
    type: [Array , String] as PropType<Variant[]> | PropType<Variant>,
    default: 'regular'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: 'primary'
  },
  borderRadius: {
    type: String,
    default: 'xs'
  },
  icon: {
    type: [Array, String]
  },
  iconSize: {
    type: Number,
    default: 20
  },
  iconVariant: {
    type: String
  },
  iconPosition: {
    type: String as PropType<IconPosition>,
    default: 'right'
  },
  disableRipple: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['clicked']);
const { rippleEffect } = useComponentFunctions();
const button = ref(null);

const hasIcon = computed(() => {
  return props.icon?.length;
});

const getVariant = computed(() => {
  const variant = props.variant;
  return Array.isArray(variant)
    ? variant.map((item) => `app-button--${item} `)
    : `app-button--${variant}`;
});

const getIconPosition = computed(() => {
  return props.text.length && props.iconPosition === 'left' ?
    'has-text-right' : props.text.length && props.iconPosition === 'right' ? 
      'has-text-left' : '';
});

const emitEvent = (ev: Event): void => {
  if (!props.disableRipple) {
    rippleEffect(ev, button.value);
  }
  emit('clicked', ev);
};
</script>

<template lang="pug">
button.app-button(
  ref="button"
  :type="type", 
  :class="[getVariant, `app-button--icon-${iconPosition}`, `app-button--${color}`, `b-radius--${borderRadius}`]", 
  :disabled="disabled", 
  @click="emitEvent")
    span.app-button--pointers-none {{ text }}
    app-icon(
    v-if="hasIcon",
    :icon="[icon, getIconPosition]",
    :size="iconSize", 
    :variant="iconVariant")
</template>

<style lang="scss">
@import 'index';
</style>
