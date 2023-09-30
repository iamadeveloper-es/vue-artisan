<script lang="ts">
import AppPicture from '../index.vue';

export default {
  name: 'app-picture-demo',
  components: { AppPicture },
  setup () {
    const src = 'src/assets/images/vue.jpg';
    return {
      src
    };
  }
};
</script>

<template lang="pug">
app-picture(
:src="src")
</template>
