<script lang="ts">
export default {
  name: 'va-dropdown-demo'
};
</script>
<script setup lang="ts">
import { ref } from 'vue';
import VaLink from '../../atoms/va-link/index.vue';

defineProps({
  title: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    required: true
  },
  showDirection: {
    type: String,
    default: 'bottom'
  }
});
const showMenu = ref(false);

const hide = () => {
  showMenu.value = false;
};

const toogleShow = () => {
  showMenu.value = !showMenu.value;
};
</script>

<template>
<button
  class="va-dropdown"
  @click="toogleShow"
  v-click-outside="hide"
  aria-haspopup="menu"
> {{ title }}
  <ul
    class="va-dropdown__list"
    v-if="showMenu"
    :class="showDirection"
    role="menu"
    tabindex="-1"
    >
      <li
        class="va-dropdown__item"
        v-for="(item, index) in items"
        :key="index"
        :class="showDirection"
        role="presentation"
      >
        <VaLink
          role="menuitem"
          v-bind="item"
        />
      </li>
    </ul>
</button>
</template>

<style lang="scss">
@import 'index';
</style>
