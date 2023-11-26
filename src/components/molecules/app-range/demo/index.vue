<script lang="ts">
export default {
  name: 'app-range-demo'
};
</script>

<script setup lang="ts">
import { ref } from 'vue';
import AppRange from '../index.vue';

const rangeVal0 = ref(78);
const rangeVal = ref(20);
const rangeVal2 = ref(40);

</script>

<template lang="pug">
.app-range-demo
  div
    p input range
    app-range(
    label="input test 0", 
    name="input-test0", 
    v-model="rangeVal0")
    p {{ rangeVal0 }}
    hr

  div
    p input range con outputPosition por defecto  
    app-range(
    label="input test", 
    name="input-test", 
    :showOutput="true", 
    v-model="rangeVal")
    hr

  div
    p input range con outputPosition 'bottom'
    app-range(
    label="input test 2", 
    name="input-test2", 
    :showOutput="true",
    outputPosition="bottom"
    v-model="rangeVal2")
    hr

</template>

<style lang="scss">
.app-range-demo{

  div{
    margin: 20px 0;
  }
}
</style>