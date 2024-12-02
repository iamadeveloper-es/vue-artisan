<script lang="ts">
export default {
  name: 'app-card'
};
</script>
<script setup lang="ts">
import { computed, useSlots } from 'vue';

const props = defineProps({
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

const hasBody = computed(() => {
  return !!slots['body'];
});

const hasFooter = computed(() => {
  return !!slots['footer'];
});
</script>

<template lang="pug">
article.app-card(:class="[`app-card--${variant}`]")
  .app-card__top(v-if="image && Object.keys(image).length")
    img(:src="image.url", :alt="img?.alt")
  .app-card__wrapper
    header.app-card__header(v-if="title || secondaryText")
      h4.app-card__title(v-if="secondaryText") {{title}}
      span.app-card__secondary-text(v-if="secondaryText") {{secondaryText}}
    .app-card__body(v-if="paragraphs && paragraphs.length")
      div(v-for="(item, index) in paragraphs" :key="index")
        p(v-html="item")
    footer.app-card__footer(v-if="hasFooter")
      slot(name="footer")
</template>

<style lang="scss">
@use 'index';
</style>