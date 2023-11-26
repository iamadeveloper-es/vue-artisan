<script lang="ts">
export default {
    name: 'app-avatar-demo'
};
</script>
<script setup lang="ts">
import { type Ref, ref } from 'vue';
import AppAvatar from '../index.vue';
import type { IAvatar } from '../IAvatar';

const avatarInfo1: Ref<IAvatar> = ref({
    name: 'Roberto Vaquero',
    img: 'avatar.jpg'
});

const avatarInfo2: Ref<IAvatar> = ref({
    name: 'Daniel verdú',
    img: 'avatar.jpg'
});

const message = ref('');

const handleEvent = () => {
    message.value = avatarInfo1.value.name;
};
</script>

<template lang="pug">
.app-avatar-demo 
    .flex
        app-avatar(
        :userInfo="avatarInfo1", 
        :clickable="true", 
        @clicked="handleEvent")

        div
            p Click en el avatar
            p(v-if="message") {{ `Usuario: ${message}` }}

    .flex
        app-avatar(
        :userInfo="avatarInfo2", 
        display="name")
</template>

<style lang="scss">
.app-avatar-demo {
    display: flex;
    align-items: flex-start;
    gap: 50px;

    .flex {
        display: flex;
        align-items: center;
    }
    p {
        margin: 0.3rem;
        margin-left: 0.7rem;
        display: block;
    }
}
</style>
