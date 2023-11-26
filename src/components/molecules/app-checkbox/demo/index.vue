<script lang="ts">
export default {
  name: 'app-checkbox-demo'
};
</script>
<script setup lang="ts">
import { ref } from 'vue';

import AppCheckbox from '../index.vue';

const checkboxesConfig = ref([
  {
    color: 'info',
    label: 'User Jhon',
    value: 'Jhon'
  },
  {
    color: 'success',
    label: 'User pepe',
    value: 'Pepe'
  }
]);

const checkboxesConfig2 = ref({
  color: 'info',
  label: 'User Jhon',
});

const checkboxesConfig3 = ref([
  {
    color: 'info',
    label: 'User Jhon',
    value: {
      name: 'Jhon',
      age: 25,
    }
  },
  {
    color: 'success',
    label: 'User pepe',
    value: {
      name: 'Pepe',
      age: 45,
    }
  },
  {
    color: 'primary',
    label: 'User otro',
    value: {
      name: 'Otro',
      age: 37,
    }
  }
]);

const inputVal = ref(['Jhon']);
const inputVal2 = ref(true);
const inputVal3 = ref([
  {
    name: 'Pepe',
    age: 45,
  },
  {
    name: 'Otro',
    age: 37,
  }
]);
</script>

<template lang="pug">
h4 Multiple: {{ inputVal }}
app-checkbox(
v-for="(item, index) in checkboxesConfig",
:key="index",
:activeColor="item.color",
:label="item.label"
:value="item.value",
v-model="inputVal")

hr

h4 Boleano: {{ inputVal2 }}
app-checkbox(
:activeColor="checkboxesConfig2.color"
:label="checkboxesConfig2.label"
v-model="inputVal2")

hr

h4 Multiple object value: {{ inputVal3 }}
app-checkbox(
v-for="(item, index) in checkboxesConfig3",
:key="index",
:activeColor="item.color"
:label="item.label"
:value="item.value",
v-model="inputVal3")
</template>
