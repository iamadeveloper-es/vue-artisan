<script lang="ts">
export default {
  name: 'va-slider'
};
</script>

<script setup lang="ts">

defineProps({
  items: {
    type: Array,
    required: true
  }
});

</script>

<template>
<div class="va-slider">
  <div class="va-slider__inner">
    <div class="va-slider__item" v-for="(item, index) in items" :key="index">{{ item.text }}</div>
  </div>
</div>
</template>

<style lang="scss">
@import 'index';
</style>
