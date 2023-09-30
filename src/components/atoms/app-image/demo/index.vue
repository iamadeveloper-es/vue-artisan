<script lang="ts">
import AppImage from '../index.vue';

export default {
  name: 'app-image-demo',
  components: { AppImage },
  setup () {
    const src = 'src/assets/images/vue.jpg';
    return {
      src
    };
  }
};
</script>

<template lang="pug">
app-image(
:src="src", 
alt="Imagen de Vue 3")
</template>
