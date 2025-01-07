<script lang="ts">
export default {
  name: 'va-picture-demo'
};
</script>
<script setup lang="ts">
import VaPicture from '../index.vue';

const src = '../../../../../src/assets/images/vue.jpg';
</script>

<template>
<VaPicture :src="src"/>
</template>
