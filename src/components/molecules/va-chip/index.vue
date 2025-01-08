<script lang="ts">
export default {
  name: 'va-chip'
};
</script>
<script setup lang="ts">
import { computed, ref } from 'vue';
import VaIcon from '../../atoms/va-icon/index.vue';

const props = defineProps({
  appendIcon: {
    type: [Array, String]
  },
  prependIcon: {
    type: [Array, String]
  },
  size: {
    type: Number,
    default: 18
  },
  closable: {
    type: Boolean,
    default: false
  },
  text: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    defalut: 'rounded',
    validator (value: string) {
      const variants = ['rounded', 'squared', 'soft-squared'];
      return variants.includes(value);
    },
  }
});
const closableIcon = ['fa-regular', 'fa-circle-xmark', 'va-chip__close'];
const show = ref(true);

const hasAppendIcon = computed(() => {
  return props.appendIcon && props.appendIcon.length;
});
const hasPrependIcon = computed(() => {
  return props.prependIcon && props.prependIcon.length;
});
const getClosableIcon = computed(() => {
  return closableIcon;
});

const getId = computed(() => {
  return props.text.split(' ').join('-').toLowerCase();
});

const emit = defineEmits(['onClick']);

const emitValue = () => {
  const payload = {
    id: getId.value,
    text: props.text
  };
  emit('onClick', payload);
};

const hide = () => {
  show.value = false;
};
</script>
<template>
<div
class="va-chip"
v-if="show"
:id="getId"
@click="emitValue"
:class="[`va-chip--${variant}`]"
>
  <VaIcon
    v-if="hasAppendIcon"
    :icon="appendIcon"
  />
  <span class="va-chip__text">{{ text }}</span>
  <VaIcon
    v-if="hasPrependIcon"
    :icon="prependIcon"
  />
  <span
    v-if="closable"
    :class="getClosableIcon"
    @click="hide"
  ></span>
</div>
</template>

<style lang="scss">
@import './_index.scss';
</style>
