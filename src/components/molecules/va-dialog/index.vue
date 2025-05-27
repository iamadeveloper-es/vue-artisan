<script lang="ts" setup>
import { ref } from 'vue';

defineOptions({
  name: 'va-dialog'
});

defineProps({
  isOpen: {
    type: Boolean,
    default: true
  },
  modelValue: Boolean,
});

const modalStatus = defineModel('isOpen')

const myModal = ref(null);

const openModal = () => {
  myModal.value.showModal();
};

</script>
<template>
  <button @click="openModal">Open</button>
  <dialog class="va-dialog" ref="myModal" v-model="modelValue">
    <slot name="body"></slot>
  </dialog>
</template>
<style lang="scss">
@use 'index';
</style>
