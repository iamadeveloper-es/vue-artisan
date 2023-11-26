<script lang="ts">
export default {
  name: 'app-image-demo'
};
</script>
<script setup lang="ts">
import AppImage from '../index.vue';

const src = '/src/assets/images/vue.jpg';

</script>

<template lang="pug">
app-image(
:src="src", 
alt="Imagen de Vue 3")
</template>
