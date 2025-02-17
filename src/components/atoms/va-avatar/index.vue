<script lang="ts">
export default {
  name: 'va-avatar'
};
</script>
<script setup lang="ts">
import { computed, type PropType } from 'vue';
import { useImageFunctions } from '../../../composables/image-functions';

type IAvatar = {
    name: string
    img: string
    alt?: string
    size?: Number
}

const props = defineProps({
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
  bgColor: {
    type: String,
    default: 'var(--va-accent)'
  },
  textColor: {
    type: String,
    default: 'var(--va-white)'
  }
});

const emit = defineEmits(['clicked']);
const { getImageUrl } = useImageFunctions();
const defaultSize: number = 35;

const getImage = computed((): string => {
  const { img } = props.userInfo;
  return getImageUrl(img);
});

const getSize = computed((): string => {
  return props.userInfo?.size ? `${props.userInfo.size}px` : `${defaultSize}px`;
});

const getFontSize = computed((): string => {
  const size = props.userInfo.size ? props.userInfo.size / 2.5 : defaultSize / 2.5;
  return `${size}px`;
});

const getInitials = computed((): String => {
  const { name } = props.userInfo;
  const nameFirstChar = name.charAt(0).toUpperCase();
  const nameSecondPart = name.split(' ')[1]?.charAt(0).toUpperCase();

  return nameSecondPart ? `${nameFirstChar}.${nameSecondPart}` : `${nameFirstChar}`;
});

const emitEvent = (ev: Event) => {
  emit('clicked', ev);
};
</script>

<template>
    <div
      class="va-avatar"
      :style="{ width: getSize, height: getSize, color: textColor, 'background-color': bgColor }"
      :class="[{ 'va-avatar--has-action': clickable, 'va-avatar--rounded': isRounded }]"
      @click="emitEvent"
    >
        <img
          class="va-avatar__img"
          v-if="display === 'img'"
          :src="getImage"
          :alt="userInfo.alt"
          :class="{ circle: isRounded }"
        />
        <span
          class="va-avatar__initials"
          v-else-if="display === 'name'"
          :style="{ 'font-size': getFontSize, 'line-height': getFontSize }"
        >
            <strong>{{ getInitials }}</strong>
        </span>
    </div>
</template>

<style lang="scss">
@import 'index';
</style>
