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
  return route.name?.toLowerCase();
});
</script>

<template lang="pug">
.app-info-component
  h1 Vue Ui Components
  .app-info-component__wrapper
    h3 {{ setComponentName }}
    router-view
</template>

<style lang="scss">
@import 'index';
</style>
