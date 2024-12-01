<script lang="ts">
export default {
  name: 'app-circular-progress-demo'
};
</script>
<script setup lang="ts">
import AppCircularProgress from '../index.vue';
import { ref } from 'vue';

const progressValue = ref(10);

const interval = setInterval(() => {
  if (progressValue.value < 100) {
        
    progressValue.value += Math.floor(Math.random() * 20) + 1;
  } else {
    clearInterval(interval);
  }
}, 1000); 
</script>

<template lang="pug">
app-circular-progress(:value="progressValue")
</template>
