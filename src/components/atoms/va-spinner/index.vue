<script lang="ts">
export default {
  name: 'va-spinner'
};
</script>
<script setup lang="ts">

defineProps({
  show: {
    type: Boolean,
    default: true
  }
});
</script>

<template>
<div class="va-spinner" v-if="show">
  <svg class="spinner" viewBox="0 0 50 50">
    <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
  </svg>
</div>
</template>

<style lang="scss">
@import 'index';
</style>
