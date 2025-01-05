<script lang="ts">
export default {
  name: 'app-bottom-bar-demo'
};
</script>
<script setup lang="ts">
import AppBottomBar from '../index.vue';

const links = [
  {
    route: 'HOME',
    label: 'Home',
    icon: 'home'
  },
  {
    route: 'SEARCH',
    label: 'search',
    icon: 'search'
  },
  {
    route: 'CALENDAR',
    label: 'Calendar',
    icon: 'calendar'
  },
  {
    route: 'ACCOUNT',
    label: 'Account',
    icon: 'user'
  }
];
</script>

<template lang="pug">
.app-bottom-nav-demo
  .app-bottom-nav-demo__wrapper
    app-bottom-bar(:links="links")
</template>

<style lang="scss">
.app-bottom-nav-demo{
  position: relative;
  display: flex;
  justify-content: center;
  // max-height: 300px;
  // overflow-y: scroll;

  &__wrapper{
    width: 50%;
    // min-height: 500px;

    border: 1px solid var(--va-neutral-600);
  }
}
</style>