<script lang="ts">
export default {
  name: 'va-slider-demo'
};
</script>

<script setup lang="ts">
import VaSlider from '../index.vue';

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

<template>

<div class="va-slider-demo">
  <va-slider :items="items"></va-slider>
</div>
</template>
