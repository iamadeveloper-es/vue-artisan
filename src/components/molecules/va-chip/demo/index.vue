<script lang="ts">
export default {
  name: 'va-chip-demo'
};
</script>
<script setup lang="ts">
import { ref } from 'vue';
import VaChip from '../index.vue';
const selection = ref({});

const handleEvent = (ev: Event) => {
  selection.value = ev;
};

</script>
<template>
<div>
  <VaChip
    @onClick="handleEvent"
    text="chip"
  />
  <VaChip
    @onClick="handleEvent"
    text="chip 2"
    :closable="true"
  />
  <VaChip
    @onClick="handleEvent"
    text="chip 3"
    :closable="true"
    variant="soft-squared"
  />
  <VaChip
    @onClick="handleEvent"
    text="chip 4"
    :closable="true"
    variant="squared"
  />
</div>
<div v-if="Object.keys(selection).length">
  <pre>{{selection}}</pre>
</div>
</template>
