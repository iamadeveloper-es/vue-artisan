<script lang="ts">
export default {
  name: 'va-picture'
};
</script>
<script setup lang="ts">

defineProps({
  src: {
    type: String,
    required: true
  }
});
</script>

<template>
<picture
class="va-picture"
:src="src"
>
 <source media="(min-width: 600w)" srcset="../../../../src/assets/images/vue2.jpeg" sizes="100vw">
 <source media="(min-width: 900w)" :srcset="src" sizes="100vw">
 <source media="(min-width: 1200w)" :srcset="src" sizes="800px">
 <img :src="src" alt="Imagen de Vue 3">
</picture>
</template>

<style lang="scss">
@import 'index';
</style>
