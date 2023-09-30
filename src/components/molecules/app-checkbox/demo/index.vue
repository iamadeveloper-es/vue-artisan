<script lang="ts">
import { ref } from 'vue';

import AppCheckbox from '../index.vue';

export default {
  name: 'app-checkbox-demo',
  components: { AppCheckbox },

  setup () {
    const checkboxConfig = ref({
      color: 'info',
      label: 'User Jhon'
    });

    const checkboxConfig2 = ref({
      color: 'success',
      label: 'User pepe'
    });

    const inputVal = ref({
      status: false,
      val: 'Jhon'
    });

    const inputVal2 = ref({
      status: true,
      val: 'Pepe'
    });

    const handleChangeEvent = (ev) => {
      if (ev.target.checked) {
        inputVal.value = {
          status: true,
          val: 'Jhon'
        };
      } else {
        inputVal.value = {
          status: false,
          val: ''
        };
      }
    };

    const handleChangeEvent2 = (ev) => {
      if (ev.target.checked) {
        inputVal2.value = {
          status: true,
          val: 'Pepe'
        };
      } else {
        inputVal2.value = {
          status: false,
          val: ''
        };
      }
    };

    return {
      inputVal,
      inputVal2,
      checkboxConfig,
      checkboxConfig2,
      handleChangeEvent,
      handleChangeEvent2
    };
  }
};
</script>

<template lang="pug">
app-checkbox(
:activeColor="checkboxConfig.color"
:disabled="checkboxConfig.disabled"
:label="checkboxConfig.label"
v-model="inputVal"
@onChange="handleChangeEvent")

app-checkbox(
:activeColor="checkboxConfig2.color"
:disabled="checkboxConfig2.disabled"
:label="checkboxConfig2.label"
v-model="inputVal2"
@onChange="handleChangeEvent2")
  template(#label)
    span Esto es un label con un 
      router-link(to="/app-radio") Link
</template>
