<script lang="ts">
export default {
    name: 'app-picture-demo'
};
</script>
<script setup lang="ts">
import AppPicture from '../index.vue';

const src = '../../../../../src/assets/images/vue.jpg';
</script>

<template lang="pug">
app-picture(
:src="src")
</template>
