<script lang="ts">
export default {
  name: 'app-snackbar'
};
</script>

<script setup lang="ts">
import { type Ref, ref, useSlots } from 'vue';
import AppIcon from '../../atoms/app-icon/index.vue';

const props = defineProps({
  closeIcon: {
    type: Array,
    default: () => ['fa-regular', 'fa-circle-xmark', 'app-snackbar__close']
  },
  hasIcon: {
    type: Boolean,
    default: false
  },
  IconSize: {
    type: Number,
    default: 18
  },
  iconVariant: {
    type: String
  },
  closeText: {
    type: String,
    default: 'Close'
  },
  duration: {
    type: Number
  },
  position: {
    type: String,
    default: 'bottom'
  }
});

const slots = useSlots();
const isVisible: Ref<Boolean> = ref(false);
let timeOut: ReturnType<typeof setTimeout> | undefined = undefined;

const show = (): void => {
  isVisible.value = true;

  if (props.duration) {
    startCounter();
  }
};

const startCounter = (): void => {
  clearTimeout(timeOut);
  const { duration } = props;
  const time = duration ? duration * 1000 : 5000;

  timeOut = setTimeout(() => {
    hide();
  }, time);
};

const hide = (): void => {
  isVisible.value = false;
  clearTimeout(timeOut);
  timeOut = undefined;
};

const hasSlot = (name: Readonly<string>): Boolean => !!slots[name];

defineExpose({
  show,
  hide
});
</script>

<template lang="pug">
transition(name="fade")
    .app-snackbar(v-show="isVisible", 
    :class="`app-snackbar--${position}`")
        .app-snackbar__header
            app-icon(
            v-if="hasIcon"
            :icon="closeIcon", 
            :size="IconSize", 
            :variant="iconVariant"
            @iconClicked="hide")
            button(v-else, 
            @click="hide") {{ closeText }}
        .app-snackbar__body(v-if="hasSlot('body')")
            slot(name="body")
</template>

<style lang="scss">
@import 'index';
</style>
