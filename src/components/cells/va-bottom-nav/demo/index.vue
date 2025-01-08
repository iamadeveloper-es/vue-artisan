<script lang="ts">
export default {
  name: 'va-bottom-bar-demo'
};
</script>
<script setup lang="ts">
import VaBottomBar from '../index.vue';

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

<template>
<div class="va-bottom-nav-demo">
  <div class="va-bottom-nav-demo__wrapper">
    <va-bottom-bar :links="links"></va-bottom-bar>
  </div>
</div>
</template>

<style lang="scss">
.va-bottom-nav-demo{
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
