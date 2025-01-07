<script lang="ts">
export default {
  name: 'app-dropdown-demo'
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

// const show = () => {
//   showMenu.value = true;
// };

const hide = () => {
  showMenu.value = false;
};

const toogleShow = () => {
  showMenu.value = !showMenu.value;
};
</script>

<template lang="pug">
button.app-dropdown(@click="toogleShow",
v-click-outside="hide",
aria-haspopup="menu") {{ title }}
    ul.app-dropdown__list(v-if="showMenu",
    :class="showDirection"
    role="menu",
    tabindex="-1")
        li.app-dropdown__item(v-for="(item, index) in items",
        :key="index",
        :class="showDirection"
        role="presentation")
          va-link(
            role="menuitem"
            v-bind="item")
</template>

<style lang="scss">
@import 'index';
</style>
