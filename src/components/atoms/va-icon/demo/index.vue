<script lang="ts">
export default {
  name: 'va-icon-demo'
};
</script>
<script setup lang="ts">
import { ref } from 'vue';
import VaIcon from '../index.vue';

const message = ref('');
const message2 = ref('');
const iconChange = ref(false);

const handleEvent = () => {
  message.value = 'Icono clickado';
};

const handleEvent2 = () => {
  message2.value = 'Icono cambiado';
  iconChange.value = !iconChange.value;
};
</script>

<template>
<VaIcon
:icon="['fa-solid', 'fa-image']"
variant="primary"
@iconClicked="handleEvent"
/>
<p>Click en el icono</p>
<p v-if="message">{{ message }}</p>
<VaIcon
:icon="['fa-solid', 'fa-image']"
:onActiveIcon="['fa-solid', 'fa-house']"
variant="primary"
:isClicked="iconChange"
@iconClicked="handleEvent2"
/>
<p>Click para cambiar el icono</p>
<p v-if="message2">{{ message2 }}</p>
</template>
