<script lang="ts">
export default {
  name: 'app-slider-demo'
};
</script>

<script setup lang="ts">
import AppSlider from '../index.vue';

const items = [
  {
    text: 1
  },
  {
    text: 2
  },
  {
    text: 3
  },
  {
    text: 4
  },
  {
    text: 5
  },
  {
    text: 6
  },
  {
    text: 7
  },
  {
    text: 8
  }
];
</script>

<template lang="pug">
.app-slider-demo
  app-slider(:items="items")
</template>
