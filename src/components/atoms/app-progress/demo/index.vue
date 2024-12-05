<script lang="ts">
export default {
  name: 'app-progress-demo'
};
</script>
<script setup lang="ts">
import AppProgress from '../index.vue';
import AppButton from '../../../molecules/app-button/index.vue';
import { ref } from 'vue';

const progressValue1 = ref(Math.floor(Math.random() * 100) + 1);
const progressValue2 = ref(Math.floor(Math.random() * 100) + 1);
const progressValue3 = ref(Math.floor(Math.random() * 100) + 1);
const progressValue4 = ref(Math.floor(Math.random() * 100) + 1);
const progressValue5 = ref(Math.floor(Math.random() * 100) + 1);

const handleEvent = () => {
  progressValue1.value = Math.floor(Math.random() * 100) + 1;
  progressValue2.value = Math.floor(Math.random() * 100) + 1;
  progressValue3.value = Math.floor(Math.random() * 100) + 1;
  progressValue4.value = Math.floor(Math.random() * 100) + 1;
  progressValue5.value = Math.floor(Math.random() * 100) + 1;
};
</script>

<template lang="pug">
.app-progress-demo
  h5 Default (xs)
  app-progress(
    :value="progressValue1")
  h5 sm
  app-progress(
    :value="progressValue2", 
    size="sm",
    showCounter="true")
  h5 md
  app-progress(
    :value="progressValue3", 
    size="md")
  h5 lg
  app-progress(
    :value="progressValue4", 
    size="lg",
    showCounter="true")
  h5 xl
  app-progress(
    :value="progressValue5", 
    size="xl")
  app-button(
    text="Mover progreso",
    @clicked="handleEvent")
</template>

<style lang="scss" scoped>
.app-progress-demo{
  h5{
    margin: 5px;
  }
}
.app-progress{
  margin-bottom: 1em;
}
</style>
