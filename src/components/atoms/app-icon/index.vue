<script lang="ts">
import { computed } from 'vue';

export default {
  name: 'app-icon',
  props: {
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
  },
  setup (props, context) {
    const emitEvent = (ev: Event): void => {
      context.emit('iconClicked', ev);
    };

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

    return {
      emitEvent,
      getVariant,
      getIcon
    };
  }
};
</script>

<template lang="pug">
span.app-icon(
:class="getVariant, getIcon",
@click="emitEvent", 
:style="{'font-size': `${size}px`}")
</template>

<style lang="scss">
@import 'index';
</style>
