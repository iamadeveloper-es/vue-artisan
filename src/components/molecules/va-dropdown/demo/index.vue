<script lang="ts">
export default {
  name: 'va-dropdown-demo'
};
</script>
<script setup lang="ts">
import VaDropdown from '../index.vue';

const icon = ['fa-solid', 'fa-house'];
const items = [
  {
    path: '/test/:1',
    query: { shoping: 123 },
    text: 'Item 1',
    icon: icon,
    iconPosition: 'left',
    iconSize: 12
  },
  {
    path: '/test/:2',
    query: { shoping: 123 },
    text: 'Item 2',
    icon: icon,
    iconPosition: 'left',
    iconSize: 12
  },
  {
    path: '/test/:3',
    query: { shoping: 123 },
    text: 'Item 3',
    icon: icon,
    iconPosition: 'left',
    iconSize: 12
  }
];
</script>

<template>
<div class="va-dropdown-demo">
  <VaDropdown
  title="Dropdown bottom"
  :items="items"
  />
  <VaDropdown
  title="Dropdown top"
  :items="items"
  showDirection="top"
  />
  <VaDropdown
  title="Dropdown right"
  :items="items"
  showDirection="right"
  />
  <VaDropdown
  title="Dropdown left"
  :items="items"
  showDirection="left"
  />
</div>
</template>

<style lang="scss">
.va-dropdown-demo{
  display: flex;
  gap: 7.5rem;
  flex-wrap: wrap;
}
</style>
