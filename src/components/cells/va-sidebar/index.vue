<script lang="ts">
export default {
  name: 'va-sidebar'
};
</script>
<script setup lang="ts">

defineProps({
  show: {
    type: Boolean,
    default: false
  },
  showLeft: {
    type: Boolean,
    default: true
  }
});

</script>

<template>
<div class="va-sidebar" :class="{ 'show': show, 'show-left' : showLeft, 'show-right' : !showLeft}">
  <slot name="sidebarContent"></slot>
</div>
</template>

<style lang="scss">
@import 'index';
</style>
