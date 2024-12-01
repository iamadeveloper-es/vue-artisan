<script lang="ts">
export default {
  name: 'app-chip-demo'
};
</script>
<script setup lang="ts">
import { ref } from 'vue';
import AppChip from '../index.vue';
const selection = ref({});

const handleEvent = (ev: Event) => {
  selection.value = ev;
};

</script>
<template lang="pug">
div
  app-chip(
  @onClick="handleEvent"
  text="chip")
  app-chip(
  @onClick="handleEvent", 
  text="chip 2", 
  :closable="true")
div(v-if="Object.keys(selection).length")
  pre {{selection}}
</template>
