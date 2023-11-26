<script lang="ts">
export default {
  name: 'app-switch-demo'
};
</script>
<script setup lang="ts">
import { ref } from 'vue';
import AppSwitch from '../index.vue';

const checkboxConfig = ref({
  color: 'info',
  label: 'User Jhon'
});

const inputVal = ref({
  status: false,
  val: ''
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
</script>

<template lang="pug">
app-switch(
:activeColor="checkboxConfig.color"
:disabled="checkboxConfig.disabled"
:label="checkboxConfig.label"
v-model="inputVal"
@onChange="handleChangeEvent")
</template>
