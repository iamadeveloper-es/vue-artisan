<script lang="ts">
import { ref } from 'vue';

import AppRadio from '../index.vue';

export default {
  name: 'app-radio-demo',
  components: { AppRadio },

  setup () {
    const selectedValue = ref('blue');
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

    const handleChangeEvent = (ev: Event) => {
      const target = ev.target as HTMLInputElement;
      selectedValue.value = target.value;
    };

    return {
      radioColors,
      selectedValue,
      handleChangeEvent
    };
  }
};
</script>

<template lang="pug">
app-radio(
v-for="item in radioColors",  
:key="item.val"
:activeColor="item.color"
:disabled="item.disabled"
:label="item.label"
:value="item.val"
name="test"
v-model="selectedValue"
@onChange="handleChangeEvent")
  template(v-if="item.customLabel", #label)
      span Esto es un label con un 
        router-link(to="/app-checkbox") Link
p Valor seleccionado: {{ selectedValue }}
</template>
