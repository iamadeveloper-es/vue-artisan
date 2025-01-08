<script lang="ts">
export default {
  name: 'va-range-demo'
};
</script>

<script setup lang="ts">
import { ref } from 'vue';
import VaRange from '../index.vue';

const rangeVal0 = ref(78);
const rangeVal = ref(20);
const rangeVal2 = ref(40);

</script>

<template>
<div class="va-range-demo">
  <div>
    <p>input range</p>
    <VaRange
    label="input test 0"
    name="input-test0"
    v-model="rangeVal0"
    />
    <p>{{ rangeVal0 }}</p>
    <hr>
  </div>
  <div>
    <p>input range con outputPosition por defecto</p>
    <VaRange
    label="input test"
    name="input-test"
    :showOutput="true"
    v-model="rangeVal"
    />
    <hr>
  </div>
  <div>
    <p>input range con outputPosition 'bottom'</p>
    <VaRange
    label="input test 2"
    name="input-test2"
    :showOutput="true"
    outputPosition="bottom"
    v-model="rangeVal2"
    />
    <hr>
  </div>
</div>

</template>

<style lang="scss">
.va-range-demo{

  div{
    margin: 20px 0;
  }
}
</style>
