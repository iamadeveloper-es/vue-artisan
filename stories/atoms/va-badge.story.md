# VaBadge tutorial

## Descripción

El componente `va-badge` es un indicador visual que se utiliza para mostrar notificaciones, contadores o estados.


## Slots

| Slot       | Descripción                                            |
|------------|--------------------------------------------------------|
| `content`  | Contenido principal sobre el cual se superpone el badge. |

---

## Ejemplo de Uso en HTML

```vue
<template>
  <va-badge 
    :count="42" 
    variant="success" 
    position="bottom-left">
    <template #content>
      <img src="avatar.png" alt="User Avatar" />
    </template>
  </va-badge>
</template>

<script setup lang="ts">
import VaBadge from '@iamadeveloper-es/vue-artisan/components/VaBadge.vue';
</script>
