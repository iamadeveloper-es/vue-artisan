<script lang="ts">
import { ref } from 'vue';

import AppRadio from '../index.vue';

export default {
  name: 'app-radio-demo',
  components: { AppRadio },

  setup () {
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

    return {
      selectedValue,
      selectedValue2,
      radioColors,
      radioColors2
    };
  }
};
</script>

<template lang="pug">
h4 Multiple: {{ selectedValue }}
app-radio(
v-for="item in radioColors",  
:key="item.val"
:activeColor="item.color"
:disabled="item.disabled"
:label="item.label"
:value="item.val"
name="test"
v-model="selectedValue")
  template(v-if="item.customLabel", #label)
      span Esto es un label con un 
        router-link(to="/app-checkbox") Link

h4 Multiple object value: {{ selectedValue2 }}
app-radio(
v-for="item in radioColors2",  
:key="item.val"
:activeColor="item.color"
:disabled="item.disabled"
:label="item.label"
:value="item.val"
name="test2"
v-model="selectedValue2")
</template>
