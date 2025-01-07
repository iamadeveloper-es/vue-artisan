<script lang="ts">
export default {
  name: 'component-view'
};
</script>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const setComponentName = computed(() => {
  return route.name?.toLowerCase().replaceAll('_', '-');
});
</script>

<template lang="pug">
.app-info-component
  .app-info-component__wrapper
    h3 {{ setComponentName }}
    router-view
</template>

<style lang="scss">
@import 'index';
</style>
