<script lang="ts">
export default {
  name: 'app-progress-demo'
};
</script>
<script setup lang="ts">
import AppProgress from '../index.vue';
import AppButton from '../../../molecules/app-button/index.vue';
import { ref } from 'vue';

const progressValue = ref(0);
const handleEvent = () => {
  progressValue.value = 100;
};
</script>

<template lang="pug">
app-progress(:value="progressValue")
app-button(@clicked="handleEvent")
</template>
