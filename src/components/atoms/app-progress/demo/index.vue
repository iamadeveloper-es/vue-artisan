<script lang="ts">
import AppProgress from '../index.vue';
import AppButton from '../../../molecules/app-button/index.vue';
import { ref } from 'vue';

export default {
  name: 'app-progress-demo',
  components: {
    AppProgress,
    AppButton
  },
  setup () {
    const progressValue = ref(0);
    const handleEvent = () => {
      progressValue.value = 100;
    };
    return {
      progressValue,
      handleEvent
    };
  }
};
</script>

<template lang="pug">
app-progress(:value="progressValue")
app-button(@clicked="handleEvent")
</template>
