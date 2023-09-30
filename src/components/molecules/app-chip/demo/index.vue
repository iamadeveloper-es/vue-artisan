<script lang="ts">
import AppChip from '../index.vue';

export default {
  name: 'app-chip-demo',
  components: {
    AppChip
  }
};
</script>
<template lang="pug">
app-chip(
text="chip")
app-chip(
text="chip 2", 
:closable="true")
</template>
