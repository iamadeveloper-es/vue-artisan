<script lang="ts">
export default {
  name: 'va-progress-demo'
};
</script>
<script setup lang="ts">
import VaProgress from '../index.vue';
import VaButton from '../../../molecules/va-button/index.vue';
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

<template>
<div class="va-progress-demo">
  <h5>Default (xs)</h5>
  <VaProgress
    :value="progressValue1"
  />
  <h5>sm</h5>
  <VaProgress
    :value="progressValue2"
    size="sm"
    :showCounter="true"
  />
  <h5>md</h5>
  <VaProgress
    :value="progressValue3"
    size="md"
  />
  <h5>lg</h5>
  <VaProgress
    :value="progressValue4"
    size="lg"
    :showCounter="true"
  />
  <h5>xl</h5>
  <VaProgress
    :value="progressValue5"
    size="xl"
  />
  <VaButton
    text="Mover progreso"
    @clicked="handleEvent"
  />
</div>
</template>

<style lang="scss" scoped>
.va-progress-demo{
  h5{
    margin: 5px;
  }
}
.va-progress{
  margin-bottom: 1em;
}
</style>
