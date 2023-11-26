<script lang="ts">
export default {
  name: 'app-modal'
};
</script>

<script setup lang="ts">
import { ref, useSlots, type Ref } from 'vue';
import { useComponentFunctions } from '../../../composables/component-functions';
import AppButton from '../app-button/index.vue';

const props = defineProps({
  backDrop: {
    type: Boolean,
    default: true
  },
  transition: {
    type: String,
    default: 'modal-fade'
  },
  closeIcon: {
    type: Array,
    default: () => ['fa-regular', 'fa-circle-xmark']
  },
  headerClass: {
    type: [Array, String]
  },
  bodyClass: {
    type: [Array, String]
  },
  footerClass: {
    type: [Array, String]
  },
  headerSticky: {
    type: Boolean,
    default: true
  },
  footerSticky: {
    type: Boolean,
    default: true
  }
});

const { rippleEffect } = useComponentFunctions();
const isModalVisible: Ref<boolean> = ref(false);
const modal = ref(null);
const slots = useSlots();

const show = (): void => {
  isModalVisible.value = true;
};

const hide = (ev: Event): void => {
  const target = ev.target as HTMLInputElement;
  if (target.getAttribute('data-dismiss') === 'modal' && props.backDrop) {
    isModalVisible.value = false;
  }
  if (target.classList.contains('app-modal-dialog__close')) {
    rippleEffect(ev, ev.target);
  }
};

const hasSlot = (name: Readonly<string>): Boolean => !!slots[name];

defineExpose({
  show,
  hide
});

</script>

<template lang="pug">
transition(:name="transition")
    .app-modal(
        ref="modal"
        @click="hide($event)", 
        v-show="isModalVisible")
        .app-modal__content(data-dismiss="modal")
            .app-modal-dialog
                .app-modal-dialog__header(
                :class="[headerClass, {'sticky' : headerSticky}]")
                    slot(name="header")
                    app-button(
                    v-if="backDrop", 
                    data-dismiss="modal",
                    class="app-modal-dialog__close" 
                    :class="closeIcon",  
                    @click="hide($event)")
                .app-modal-dialog__full(v-if="hasSlot('full')")
                  slot(name="full")
                .app-modal-dialog__body(
                v-if="hasSlot('body')", 
                :class="bodyClass")
                    slot(name="body")
                .app-modal-dialog__footer(
                v-if="hasSlot('footer')", 
                :class="[footerClass, {'sticky' : footerSticky}]")
                    slot(name="footer")
</template>

<style lang="scss">
@import 'index';
@import 'transitions';
</style>
