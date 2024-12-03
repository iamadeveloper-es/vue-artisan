<!-- Meow.story.vue -->
<script setup>
import { reactive, ref } from 'vue';
import AppAvatar from '../../src/components/atoms/app-avatar/index.vue';


const message = ref('');
const userInfo1 = ref({
  name: 'Roberto Blanco',
  img: 'avatar.jpg'
});
const userInfo2 = ref({
  name: 'Daniel verdú',
  img: 'avatar.jpg'
});

const handleEvent = () => {
  message.value = userInfo1.value.name;
};


</script>
<template>
    <Story title="atoms/app-avata">
        <Variant title="imagen">
            <app-avatar
            :userInfo="userInfo1"
            :clickable="true"
            @clicked="handleEvent"
            ></app-avatar>
        </Variant>
        <Variant title="iniciales">
            <app-avatar
            :userInfo="userInfo2"
            display="name"
            ></app-avatar>
        </Variant>
    </Story>
</template>

<docs lang="md">
  # Avatar
  
  Checkout this [cool video](https://www.youtube.com/watch?v=dQw4w9WgXcQ)!
</docs>
  