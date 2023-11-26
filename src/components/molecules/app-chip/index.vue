<script lang="ts">
export default {
  name: 'app-chip'
};
</script>
<script setup lang="ts">
import { computed, ref } from 'vue';
import AppIcon from '../../atoms/app-icon/index.vue';

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
  }
});
const closableIcon = ['fa-regular', 'fa-circle-xmark', 'app-chip__close'];
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

const emit = defineEmits(['onClick']);

const emitValue = (ev: Event) => {
  emit('onClick', ev);
};

const hide = () => {
  show.value = false;
};
</script>
<template lang="pug">
.app-chip(v-if="show")
    app-icon(
    v-if="hasAppendIcon"
    :icon="appendIcon")
    span.app-chip__text(@click="emitValue") {{ text }}
    app-icon(
    v-if="hasPrependIcon"
    :icon="prependIcon")
    span(
    v-if="closable", 
    :class="getClosableIcon", 
    @click="hide")
</template>

<style lang="scss">
@import './_index.scss';
</style>
