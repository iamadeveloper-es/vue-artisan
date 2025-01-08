<script lang="ts">
export default {
  name: 'va-image'
};
</script>
<script setup lang="ts">

defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String
  }
});

</script>

<template>
<img class="va-image" :src="src" :alt="alt">
</template>

<style lang="scss">
@import 'index';
</style>
