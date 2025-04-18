<script setup lang="ts">
import { ref } from 'vue';
import VaAvatar from '../../src/components/atoms/va-avatar/index.vue';

const message = ref('');

const handleEvent = (ev: Event) => {
  message.value = '¡Avatar clicado!';
};

const name = 'Jane Doe';
const image = '/images/avatar.jpg'; // ← desde carpeta public
const brokenImage = '/images/does-not-exist.jpg';
</script>

<template>
  <Story title="atoms/va-avatar" :layout="{ type: 'grid', width: 400 }">

    <Variant title="Imagen por defecto">
      <va-avatar :name="name" :image="image" />
    </Variant>

    <Variant title="Iniciales (display: name)">
      <va-avatar :name="name" display="name" />
    </Variant>

    <Variant title="Texto personalizado">
      <va-avatar :name="name" text="JD" />
    </Variant>

    <Variant title="Imagen rota (fallback a iniciales)">
      <va-avatar :name="name" :image="brokenImage" />
    </Variant>

    <Variant title="Con borde">
      <va-avatar :name="name" display="name" :isBordered="true" />
    </Variant>

    <Variant title="No redondeado">
      <va-avatar :name="name" display="name" :isRounded="false" />
    </Variant>

    <Variant title="Clicable">
      <va-avatar :name="name" :image="image" :clickable="true" @clicked="handleEvent" />
      <p>{{ message }}</p>
    </Variant>

    <Variant title="Colores personalizados">
      <va-avatar
        :name="name"
        display="name"
        bgColor="va-danger"
        color="va-white"
        :isBordered="true"
      />
    </Variant>

    <Variant title="Tamaños: XS">
      <va-avatar :name="name" display="name" size="xs" />
    </Variant>

    <Variant title="Tamaños: SM">
      <va-avatar :name="name" display="name" size="sm" />
    </Variant>

    <Variant title="Tamaños: MD (default)">
      <va-avatar :name="name" display="name" size="md" />
    </Variant>

    <Variant title="Tamaños: LG">
      <va-avatar :name="name" display="name" size="lg" />
    </Variant>

    <Variant title="Tamaños: XL">
      <va-avatar :name="name" display="name" size="xl" />
    </Variant>

  </Story>
</template>

<docs lang="md">
# VaAvatar - Galería completa

> Las imágenes se cargan desde la carpeta `public/images`.

Esta historia muestra todas las combinaciones posibles para el componente `VaAvatar`.

## Props destacadas

- `name`: Nombre del usuario
- `image`: Imagen desde `/public`
- `display`: `'img'` o `'name'`
- `text`: Texto manual en vez de iniciales
- `clickable`: Activa evento `@clicked`
- `isRounded`, `isBordered`
- `bgColor`, `color`
- `size`: `'xs'`, `'sm'`, `'md'`, `'lg'`, `'xl'`
</docs>
