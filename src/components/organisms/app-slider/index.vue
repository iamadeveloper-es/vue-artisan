<script lang="ts">
export default {
  name: 'app-slider'
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

<template lang="pug">
.app-slider
    .app-slider__inner
        .app-slider__item(v-for="(item, index) in items", 
        :key="index") {{ item.text }}
</template>

<style lang="scss">
@import 'index';
</style>