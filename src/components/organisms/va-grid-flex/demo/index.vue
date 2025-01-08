<script lang="ts">
export default {
  name: 'va-grid-flex-demo'
};
</script>

<script lang="ts" setup>
import VaGridFlex from '../index.vue';
import VaRow from '../va-row/index.vue';
import VaCol from '../va-col/index.vue';
</script>

<template>
<div class="va-grid-flex-demo">
  <va-grid-flex>
    <va-row>
      <va-col v-for="n in 4" :key="n" :col="6" :md="4"></va-col>
    </va-row>
  </va-grid-flex>
</div>
</template>

<style lang="scss">

</style>
