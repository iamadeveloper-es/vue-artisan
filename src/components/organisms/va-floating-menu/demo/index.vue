<script lang="ts">
export default {
  name: 'va-floating-menu-demo'
};
</script>

<script setup lang="ts">
import VaFloatingMenu from '../index.vue';

</script>

<template>
<div class="floating-menu-demo">
  <p>Haz scroll abajo y arriba para mostrar</p>
  <va-floating-menu></va-floating-menu>
</div>
</template>

<style lang="scss">
.floating-menu-demo {
    height: 5000px;
}
</style>
