<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const test = 'hola';
const setComponentName = computed(() => {
  return route.name?.toLowerCase();
});
</script>

<template lang="pug">
div.app-info-component
  h1 Vue Ui Components
  h3 {{ setComponentName }}
  h2 {{ test }}
  p hola mundo
  router-view
</template>
