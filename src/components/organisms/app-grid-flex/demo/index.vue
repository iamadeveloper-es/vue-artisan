<script lang="ts">
export default {
  name: 'app-grid-flex-demo'
};
</script>

<script lang="ts" setup>
import AppGridFlex from '../index.vue';
import AppRow from '../app-row/index.vue';
import AppCol from '../app-col/index.vue';
</script>

<template lang="pug">
.app-grid-flex-demo
    app-grid-flex
      app-row
        app-col(
          v-for="n in 4", 
          :key="n", 
          col="6",
          md="4")
</template>

<style lang="scss">

</style>