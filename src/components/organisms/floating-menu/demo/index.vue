<script lang="ts">
export default {
    name: 'app-floating-menu-demo'
};
</script>

<script setup lang="ts">
import FloatingMenu from '../index.vue';

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
