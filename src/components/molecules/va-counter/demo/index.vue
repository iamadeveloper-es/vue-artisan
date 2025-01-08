<script lang="ts">
export default {
  name: 'va-counter-demo'
};
</script>
<script setup lang="ts">
import { ref } from 'vue';
import VaCounter from '../index.vue';

const amount = ref(0);
</script>
<template>
<VaCounter v-model="amount"/>
</template>

<style lang="scss">

</style>
