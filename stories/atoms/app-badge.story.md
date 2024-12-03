# AppBadge tutorial

## Descripción

El componente `app-badge` es un indicador visual que se utiliza para mostrar notificaciones, contadores o estados.


## Slots

| Slot       | Descripción                                            |
|------------|--------------------------------------------------------|
| `content`  | Contenido principal sobre el cual se superpone el badge. |

---

## Ejemplo de Uso en HTML

```vue
<template>
  <app-badge 
    :count="42" 
    variant="success" 
    position="bottom-left">
    <template #content>
      <img src="avatar.png" alt="User Avatar" />
    </template>
  </app-badge>
</template>

<script setup lang="ts">
import AppBadge from '@iamadeveloper-es/vue3-ui-components/components/AppBadge.vue';
</script>
