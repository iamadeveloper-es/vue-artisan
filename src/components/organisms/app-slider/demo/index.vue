<script lang="ts">
import AppSlider from '../index.vue';

export default {
  name: 'app-slider-demo',
  components: {AppSlider},
  setup (){
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

    return{
      items
    };
  }
};
</script>

<template lang="pug">
.app-slider-demo
  app-slider(:items="items")
</template>
