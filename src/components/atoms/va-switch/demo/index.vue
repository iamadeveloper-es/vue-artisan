<script lang="ts">
export default {
  name: 'va-switch-demo'
};
</script>
<script setup lang="ts">
import { ref } from 'vue';
import VaSwitch from '../index.vue';

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

<template>
<VaSwitch
:activeColor="checkboxConfig.color"
:disabled="checkboxConfig.disabled"
:label="checkboxConfig.label"
v-model="inputVal.val"
@onChange="handleChangeEvent"
/>
</template>
