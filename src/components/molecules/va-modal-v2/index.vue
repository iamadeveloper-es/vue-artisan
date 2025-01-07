<script lang="ts">
export default {
  name: 'va-modal-v2'
};
</script>

<script setup lang="ts">
import { ref, useSlots, type Ref } from 'vue';
import { useComponentFunctions } from '../../../composables/component-functions';
import VaButton from '../va-button/index.vue';

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
  if (target.classList.contains('va-modal-dialog__close')) {
    rippleEffect(ev, ev.target);
  }
};

const hasSlot = (name: Readonly<string>): Boolean => !!slots[name];

defineExpose({
  show,
  hide
});

</script>

<template>
<div class="va-modal-v2" ref="modal" @click="hide($event)" v-show="isModalVisible">
  <div class="va-modal-v2__content" data-dismiss="modal">
    <transition :name="transition">
      <div class="va-modal-dialog" v-show="isModalVisible">
        <div class="va-modal-dialog__header" :class="[headerClass, {'sticky' : headerSticky}]">
          <slot name="header"></slot>
          <va-button class="va-modal-dialog__close" v-if="backDrop" data-dismiss="modal" :class="closeIcon" @click="hide($event)"></va-button>
        </div>
        <div class="va-modal-dialog__full" v-if="hasSlot('full')">
          <slot name="full"></slot>
        </div>
        <div class="va-modal-dialog__body" v-if="hasSlot('body')" :class="bodyClass">
          <slot name="body"></slot>
        </div>
        <div class="va-modal-dialog__footer" v-if="hasSlot('footer')" :class="[footerClass, {'sticky' : footerSticky}]">
          <slot name="footer"></slot>
        </div>
      </div>
    </transition>
  </div>
</div>
</template>

<style lang="scss">
@import 'index';
@import 'transitions';
</style>
