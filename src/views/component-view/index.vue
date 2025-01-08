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

<template>
<div class="va-info-component">
  <div class="va-info-component__wrapper">
    <h3>{{ setComponentName }}</h3>
    <router-view></router-view>
  </div>
</div>
</template>

<style lang="scss">
@import 'index';
</style>
