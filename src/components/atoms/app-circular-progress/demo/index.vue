<script lang="ts">
export default {
  name: 'app-circular-progress-demo'
};
</script>
<script setup lang="ts">
import AppCircularProgress from '../index.vue';
import { ref } from 'vue';

const progressValue = ref(5);

const interval = setInterval(() => {
  if (progressValue.value < 100) {
    progressValue.value += Math.floor(Math.random() * 20) + 1;
    
    if (progressValue.value > 100) {
      progressValue.value = 100;
    }
  } else {
    // progressValue.value = 0;
    clearInterval(interval);
  }
}, 1000); 
</script>

<template lang="pug">
app-circular-progress(:value="progressValue")
</template>
