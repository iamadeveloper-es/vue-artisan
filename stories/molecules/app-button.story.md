# AppButton tutorial

## Descripción

El componente `app-button` es un botón reutilizable que admite texto, íconos y estilos personalizados. Ofrece soporte para diferentes variantes de estilo y efectos de interacción como el efecto de "ripple". 

## Eventos

| Evento  | Descripción                                                                 |
|---------|-----------------------------------------------------------------------------|
| `clicked` | Se emite cuando el botón es clickeado.

## Ejemplo de Uso HTML

```vue
<template>
  <app-button
    text="Click Me"
    :icon="['mdi-home']"
    :iconSize="24"
    :variant="'primary'"
    :iconPosition="'left'"
    @clicked="handleClick"
  />
</template>

<script setup lang="ts">
import AppButton from '@iamadeveloper-es/vue-artisan/components/molecules/va-button/index.vue';

const handleClick = (event: Event) => {
  console.log('Button clicked:', event);
};
</script>