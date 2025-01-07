<!-- Meow.story.vue -->
<script setup lang="ts">
import { ref } from 'vue';
import VaAvatar from '../../src/components/atoms/va-avatar/index.vue';


const message = ref('');
const imagen = ref({
  name: 'John Doe',
  img: 'avatar.jpg'
});
const iniciales = ref({
  name: 'John Doe',
  img: 'avatar.jpg'
});

const handleEvent = () => {
  message.value = imagen.value.name;
};


</script>
<template>
    <Story title="atoms/va-avatar" :layout="{ type: 'grid', width: 400 }">
        <Variant title="Imagen">
            <va-avatar
            :userInfo="imagen"
            :clickable="true"
            @clicked="handleEvent"
            ></va-avatar>
        </Variant>
        <Variant title="Iniciales">
            <va-avatar
            :userInfo="iniciales"
            display="name"
            ></va-avatar>
        </Variant>
    </Story>
</template>

<docs lang="md">
  # Avatar

  Checkout this [cool video](https://www.youtube.com/watch?v=dQw4w9WgXcQ)!
</docs>
