<script lang="ts">
export default {
  name: 'app-counter-demo'
};
</script>
<script setup lang="ts">
import { ref } from 'vue';
import AppCounter from '../index.vue';

const amount = ref(0);
</script>
<template lang="pug">
app-counter(
  v-model="amount"
)
</template>

<style lang="scss">

</style>