<script lang="ts">
export default {
  name: 'app-alert'
};
</script>

<script setup lang="ts">
import { computed, type Ref, ref, useSlots } from 'vue';
import AppIcon from '../../atoms/app-icon/index.vue';

const props = defineProps({
  alertType: {
    type: String,
    default: 'danger'
  },
  closeIcon: {
    type: Array,
    default: () => ['fa-regular', 'fa-circle-xmark', 'app-alert__close']
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

<template lang="pug">
transition(name="fade")
    .app-alert(v-show="isVisible", 
    :class="`app-alert--${alertType}`")
        .app-alert__header
            app-icon(
            v-if="hasIcon"
            :icon="closeIcon", 
            :size="IconSize", 
            :variant="iconVariant"
            @iconClicked="hide")
            button(v-else, 
            @click="hide") {{ closeText }}
        .app-alert__body(v-if="hasSlot('body')")
          h2 hola
          slot(name="body")
</template>

<style lang="scss">
@import 'index';
</style>
