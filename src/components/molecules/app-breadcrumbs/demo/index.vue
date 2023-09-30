<script lang="ts">
import { ref } from 'vue';
import AppBreadcrumbs from '../index.vue';

export default {
  name: 'app-breadcrumbs-demo',
  components: { AppBreadcrumbs },
  setup () {
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

    return {
      items
    };
  }
};
</script>

<template lang="pug">
app-breadcrumbs(:items="items")
</template>
