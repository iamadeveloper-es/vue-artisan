<script lang="ts">
import { computed, ref } from 'vue';
import AppIcon from '../../atoms/app-icon/index.vue';

export default {
  name: 'app-chip',
  components: {
    AppIcon
  },
  props: {
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
  },
  setup (props, context) {
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

    const emitValue = (ev: Event) => {
      context.emit('onClick', ev);
    };

    const hide = () => {
      show.value = false;
    };

    return {
      show,
      hasAppendIcon,
      hasPrependIcon,
      getClosableIcon,
      emitValue,
      hide
    };
  }
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
