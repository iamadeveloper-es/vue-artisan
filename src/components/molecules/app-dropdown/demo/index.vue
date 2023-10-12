<script lang="ts">
import AppDropdown from '../index.vue';

export default {
  name: 'app-dropdown-demo',
  components: {AppDropdown},
  setup (){
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
    return {
      items
    };
  }
};
</script>

<template lang="pug">
.app-dropdown-demo 
  app-dropdown(title="Dropdown bottom", 
  :items="items")

  app-dropdown(title="Dropdown top", 
  :items="items", 
  showDirection="top")

  app-dropdown(title="Dropdown right", 
  :items="items", 
  showDirection="right")

  app-dropdown(title="Dropdown left", 
  :items="items", 
  showDirection="left")
</template>

<style lang="scss">
.app-dropdown-demo{
  display: flex;
  gap: 7.5rem;
  flex-wrap: wrap;
}
</style>
