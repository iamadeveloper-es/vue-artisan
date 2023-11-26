<script lang="ts">
export default {
  name: 'app-chip-demo'
};
</script>
<script setup lang="ts">
import AppChip from '../index.vue';

</script>
<template lang="pug">
app-chip(
text="chip")
app-chip(
text="chip 2", 
:closable="true")
</template>
