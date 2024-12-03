<!-- Meow.story.vue -->
<script setup lang="ts">
import { reactive, ref } from 'vue';
import AppAvatar from '../../src/components/atoms/app-avatar/index.vue';


const message = ref('');
const imagen = ref({
  name: 'Roberto Blanco',
  img: 'avatar.jpg'
});
const iniciales = ref({
  name: 'Daniel verdú',
  img: 'avatar.jpg'
});

const handleEvent = () => {
  message.value = imagen.value.name;
};


</script>
<template>
    <Story title="atoms/app-avatar" :layout="{ type: 'grid', width: 400 }">
        <Variant title="Imagen">
            <app-avatar
            :userInfo="imagen"
            :clickable="true"
            @clicked="handleEvent"
            ></app-avatar>
        </Variant>
        <Variant title="Iniciales">
            <app-avatar
            :userInfo="iniciales"
            display="name"
            ></app-avatar>
        </Variant>
    </Story>
</template>

<docs lang="md">
  # Avatar
  
  Checkout this [cool video](https://www.youtube.com/watch?v=dQw4w9WgXcQ)!
</docs>
  