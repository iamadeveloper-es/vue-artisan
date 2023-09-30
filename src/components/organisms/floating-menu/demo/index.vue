<script lang="ts">
import FloatingMenu from '../index.vue';

export default {
  name: 'app-floating-menu',
  components: {
    FloatingMenu
  }
};
</script>

<template lang="pug">
.floating-menu-demo
    p Haz scroll abajo y arriba para mostrar
    floating-menu
</template>

<style lang="scss">
.floating-menu-demo {
    height: 5000px;
}
</style>
