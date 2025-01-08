<script lang="ts">
export default {
  name: 'va-card'
};
</script>
<script setup lang="ts">
import { computed, useSlots } from 'vue';

defineProps({
  title: {
    type: String
  },
  secondaryText: {
    type: String
  },
  variant: {
    type: String,
    default: 'outlined'
  },
  image: {
    type: Object
  },
  paragraphs: {
    type: Array
  }
});

const slots = useSlots();

// const hasBody = computed(() => {
//   return !!slots['body'];
// });

const hasFooter = computed(() => {
  return !!slots['footer'];
});
</script>

<template>
<article class="va-card" :class="[`va-card--${variant}`]">
  <div class="va-card__top" v-if="image &amp;&amp; Object.keys(image).length"><img :src="image.url" :alt="img?.alt"></div>
  <div class="va-card__wrapper">
    <header class="va-card__header" v-if="title || secondaryText">
      <h4 class="va-card__title" v-if="secondaryText">{{title}}</h4><span class="va-card__secondary-text" v-if="secondaryText">{{secondaryText}}</span>
    </header>
    <div class="va-card__body" v-if="paragraphs &amp;&amp; paragraphs.length">
      <div v-for="(item, index) in paragraphs" :key="index">
        <p v-html="item"></p>
      </div>
    </div>
    <footer class="va-card__footer" v-if="hasFooter">
      <slot name="footer"></slot>
    </footer>
  </div>
</article>
</template>

<style lang="scss">
@use 'index';
</style>
