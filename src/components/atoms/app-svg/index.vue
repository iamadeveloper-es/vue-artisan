<script lang="ts" setup>
import { defineAsyncComponent, ref, watch } from 'vue';

// Define las props
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const icon = ref(null);

watch(
  () => props.name,
  (newName) => {
    icon.value = defineAsyncComponent(() => 
      import(`../../../assets/icons/${newName}.svg`)
    );
  },
  { immediate: true }
);
</script>

<template lang="pug">
component(:is="icon")
</template>

<style lang="scss">
/* Estilos opcionales */
</style>
