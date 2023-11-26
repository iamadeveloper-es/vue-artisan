<script lang="ts">
export default {
  name: 'app-breadcrumbs-demo'
};
</script>
<script setup lang="ts">
import { ref } from 'vue';
import AppBreadcrumbs from '../index.vue';

const items = ref([
  {
    text: 'Home',
    active: false,
    route: '/'
  },
  {
    text: 'Link 1',
    active: false,
    route: '/'
  },
  {
    text: 'Link 2',
    active: true,
    route: '/'
  }
]);
</script>

<template lang="pug">
app-breadcrumbs(:items="items")
</template>
