<script lang="ts">
import { computed, type PropType } from 'vue';
import { useImageFunctions } from '../../../composables/image-functions';
import type { IAvatar } from './IAvatar';

export default {
  name: 'app-avatar',
  props: {
    userInfo: {
      type: Object as PropType<IAvatar>,
      required: true
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
    variant: {
      type: String,
      default: 'orange'
    }
  },
  setup (props, context) {
    const { getImageUrl } = useImageFunctions();
    const defaultSize: number = 35;

    const getImage = computed((): String => {
      const { img } = props.userInfo;
      return getImageUrl(img);
    });

    const getSize = computed((): String => {
      return props.userInfo.size ? `${props.userInfo.size}px` : `${defaultSize}px`;
    });

    const getFontSize = computed((): String => {
      const size = props.userInfo.size ? props.userInfo.size / 2.5 : defaultSize / 2.5;
      return `${size}px`;
    });

    const getInitials = computed((): String => {
      const { name } = props.userInfo;
      const nameFirstChar = name.charAt(0).toUpperCase();
      const nameSecondPart = name.split(' ')[1]?.charAt(0).toUpperCase();

      return nameSecondPart ? `${nameFirstChar} ${nameSecondPart}` : `${nameFirstChar}`;
    });

    const emitEvent = (ev: Event) => {
      context.emit('clicked', ev);
    };

    return {
      getImage,
      getSize,
      getFontSize,
      getInitials,
      emitEvent
    };
  }
};
</script>

<template lang="pug">
.app-avatar(
:style="{'width': getSize, 'height': getSize}", 
:class="{'app-avatar--has-action': clickable, 'app-avatar--rounded': isRounded}, `app-avatar--${variant}`" 
@click="emitEvent")
    img.app-avatar__img(v-if="display === 'img'", 
    :src="getImage", 
    :alt="userInfo.alt")
    .app-avatar__initials(v-else-if="display === 'name'", 
    :style="{'font-size': getFontSize, 'line-height': getFontSize}")
        strong() {{ getInitials }}
</template>

<style lang="scss">
@import 'index';
</style>
