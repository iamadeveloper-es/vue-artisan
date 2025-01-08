<script lang="ts" setup>
import { defineAsyncComponent, markRaw, shallowRef, watch } from 'vue';

// Define las props
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

// Usa shallowRef en lugar de ref
const icon = shallowRef(null);

watch(
  () => props.name,
  (newName) => {
    // Usa markRaw para evitar reactividad innecesaria
    icon.value = markRaw(
      defineAsyncComponent(() =>
        import(`../../../assets/icons/${newName}.svg`)
      )
    );
  },
  { immediate: true }
);
</script>

<template>
  <component :is="icon"></component>
</template>

<style lang="scss">
/* Estilos opcionales */
</style>
