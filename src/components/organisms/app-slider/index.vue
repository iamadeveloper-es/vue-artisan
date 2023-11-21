<script lang="ts">

export default {
  name: 'app-slider',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  setup (){

    return{};
  }
};
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