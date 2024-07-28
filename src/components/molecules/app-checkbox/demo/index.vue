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
    value: 'Jhon',
    name: 'check-1'
  },
  {
    color: 'success',
    label: 'User pepe',
    value: 'Pepe',
    name: 'check-2'
  }
]);

const checkboxesConfig2 = ref({
  color: 'info',
  label: 'User Jhon',
  name: 'check-3'
});

const checkboxesConfig3 = ref([
  {
    color: 'info',
    label: 'User Jhon',
    value: {
      name: 'Jhon',
      age: 25,
    },
    name: 'check-4'
  },
  {
    color: 'success',
    label: 'User pepe',
    value: {
      name: 'Pepe',
      age: 45,
    },
    name: 'check-5'
  },
  {
    color: 'primary',
    label: 'User otro',
    value: {
      name: 'Otro',
      age: 37,
    },
    name: 'check-6'
  }
]);

const inputVal = ref(['Jhon']);
const inputVal2 = ref(true);
const inputVal2B = ref(false);
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
:name="item.name"
v-model="inputVal")

hr

h4 Boleano: {{ inputVal2 }}
app-checkbox(
:activeColor="checkboxesConfig2.color"
:label="checkboxesConfig2.label"
:name="checkboxesConfig2.name"
v-model="inputVal2")

hr

h4 BoleanoV2: {{ inputVal2B }}
app-checkbox(
:activeColor="checkboxesConfig2.color"
:label="checkboxesConfig2.label",
:name="checkboxesConfig2.name"
true-value="1",
false-value="false",
v-model="inputVal2B")

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
