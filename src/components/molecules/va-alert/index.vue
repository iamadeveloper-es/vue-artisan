<script lang="ts">
export default {
  name: 'va-alert'
};
</script>

<script setup lang="ts">
import { type Ref, ref, useSlots } from 'vue';
import VaIcon from '../../atoms/va-icon/index.vue';

defineProps({
  alertType: {
    type: String,
    default: 'danger'
  },
  closeIcon: {
    type: Array,
    default: () => ['fa-regular', 'fa-circle-xmark', 'va-alert__close']
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
  }
});

const slots = useSlots();
const isVisible: Ref<Boolean> = ref(false);

const show = (): void => {
  isVisible.value = true;
};


const hide = (): void => {
  isVisible.value = false;
};

const hasSlot = (name: Readonly<string>): Boolean => !!slots[name];

defineExpose({
  show,
  hide
});
</script>

<template>
<transition name="fade">
  <div
    class="va-alert"
    v-show="isVisible"
    :class="`va-alert--${alertType}`"
  >
    <div class="va-alert__header">
      <VaIcon
        v-if="hasIcon"
        :icon="closeIcon"
        :size="IconSize"
        :variant="iconVariant"
        @iconClicked="hide"
      />
      <button
        v-else
        @click="hide"
      >{{ closeText }}
      </button>
    </div>
    <div
      class="va-alert__body"
      v-if="hasSlot('body')"
      >
        <h2>hola</h2>
        <slot name="body"></slot>
    </div>
  </div>
</transition>
</template>

<style lang="scss">
@import 'index';
</style>
