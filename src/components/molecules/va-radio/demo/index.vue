<script lang="ts">
export default {
  name: 'va-radio-demo'
};
</script>

<script setup lang="ts">
import { ref } from 'vue';
import VaRadio from '../index.vue';

const selectedValue = ref('blue');
const selectedValue2 = ref({
  name: 'red',
  age: 4
});
const radioColors = ref([
  {
    color: 'info',
    val: 'red',
    label: 'Color Red'
  },
  {
    color: 'danger',
    val: 'blue',
    label: 'Color Blue'
  },
  {
    color: 'primary',
    val: 'green',
    label: 'Color Green',
    customLabel: true
  }
]);

const radioColors2 = ref([
  {
    color: 'info',
    val: {
      name: 'red',
      age: 4
    },
    label: 'Color Red'
  },
  {
    color: 'danger',
    val: {
      name: 'blue',
      age: 44
    },
    label: 'Color Blue'
  },
  {
    color: 'primary',
    val: {
      name: 'green',
      age: 14
    },
    label: 'Color Green',
    customLabel: true
  }
]);
</script>

<template>
<h4>Multiple: {{ selectedValue }}</h4>
<va-radio v-for="item in radioColors" :key="item.val" :activeColor="item.color" :disabled="item.disabled" :label="item.label" :value="item.val" name="test" v-model="selectedValue">
  <template v-if="item.customLabel" #label><span>Esto es un label con un
      <router-link to="/va-checkbox">Link</router-link></span></template>
</va-radio>
<h4>Multiple object value: {{ selectedValue2 }}</h4>
<va-radio v-for="item in radioColors2" :key="item.val" :activeColor="item.color" :disabled="item.disabled" :label="item.label" :value="item.val" name="test2" v-model="selectedValue2"></va-radio>
</template>
