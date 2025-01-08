<script lang="ts">
export default {
  name: 'va-image-demo'
};
</script>
<script setup lang="ts">
import VaImage from '../index.vue';

const src = '/src/assets/images/vue.jpg';

</script>

<template>
<VaImage
:src="src"
alt="Imagen de Vue 3"
/>
</template>
