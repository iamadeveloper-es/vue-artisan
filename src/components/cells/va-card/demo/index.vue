<script lang="ts">
export default {
  name: 'va-card-demo'
};
</script>
<script setup lang="ts">
import { ref } from 'vue';
import VaCard from '../index.vue';

const cards = ref([
  {
    title: 'Título 1',
    secondaryText: 'Texto secundario'
  },
  {
    title: 'Título 2',
    secondaryText: 'Texto secundario 2 un poco más largo',
    image: {
      url: '/src/assets/images/vue.jpg',
      alt: 'imágen de Vue 3'
    }
  },
  {
    title: 'Título 3',
    secondaryText: 'Card con imágen, body y footer',
    image: {
      url: '/src/assets/images/vue.jpg',
      alt: 'imágen de Vue 3'
    },
    paragraphs: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit']
  }
]);
</script>

<template>
<div class="va-card-demo">
  <va-card v-for="(item, index) in cards" :key="index" :title="item.title" :secondaryText="item.secondaryText" :image="item.image" :paragraphs="item.paragraphs"></va-card>
</div>
</template>

<style lang="scss">
.va-card-demo{
  display: flex;
  gap: 5px;
  flex-wrap: wrap;

  .va-card{
    width: calc(100% / 4);
  }
}
</style>
