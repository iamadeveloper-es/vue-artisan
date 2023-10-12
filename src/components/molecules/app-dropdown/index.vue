<script lang="ts">
import { ref } from 'vue';
import AppLink from '../../atoms/app-link/index.vue';

export default {
  name: 'app-dropdown',
  components: {AppLink},
  props: {
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
  },
  setup (){
    const showMenu = ref(false);

    const show = () => {
      showMenu.value = true;
    };

    const hide = () => {
      showMenu.value = false;
    };

    const toogleShow = () => {
      showMenu.value = !showMenu.value;
    };

    return {
      showMenu,
      show,
      hide,
      toogleShow
    };
  }
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
          app-link(
            role="menuitem"
            v-bind="item")
</template>

<style lang="scss">
@import 'index';
</style>