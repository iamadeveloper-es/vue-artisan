<script lang="ts">
export default {
  name: 'va-link-demo'
};
</script>
<script setup lang="ts">
import { ref } from 'vue';
import VaLink from '../index.vue';

const icon = 'calendar';
const links = ref([
  {
    name: 'TEST',
    text: 'Link 1',
    params: { id: '12' },
    query: { shoping: 123 }
  },
  {
    name: 'TEST',
    params: { id: '1235' },
    text: 'Link 2',
    iconSpace: 'start-md',
    icon: icon
  },
  {
    path: '/test/:1',
    text: 'Link 3',
    iconSpace: 'end-md',
    icon: icon,
    iconPosition: 'left'
  },
  {
    path: '/test/:2',
    text: 'Link 4',
    iconSpace: 'top-md',
    icon: icon,
    iconPosition: 'top'
  },
  {
    path: '/test/:3',
    query: { shoping: 123 },
    text: 'Link 5',
    iconSpace: 'bottom-md',
    icon: icon,
    iconPosition: 'bottom'
  },
  {
    path: '/test/:1',
    icon: icon
  },
]);
</script>

<template>
<div class="va-link-demo">
  <div
    v-for="(item, index) in links"
    :key="index"
  >
    <VaLink
      :path="item.path"
      :routeName="item.name"
      :params="item.params"
      :queryParams="item.query"
      :text="item.text"
      :icon="item.icon"
      :iconPosition="item.iconPosition"
      :iconSpace="item.iconSpace"
    />
  </div>
</div>
</template>

<style lang="scss">
.va-link-demo {
    display: flex;
    flex-direction: column;
    gap: 20px;

}
</style>
