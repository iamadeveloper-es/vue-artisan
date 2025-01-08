<script lang="ts">
export default {
  name: 'va-breadcrumbs-demo'
};
</script>
<script setup lang="ts">
import { ref } from 'vue';
import VaBreadcrumbs from '../index.vue';

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

<template>
<VaBreadcrumbs :items="items"/>
</template>
