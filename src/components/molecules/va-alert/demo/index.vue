<script lang="ts">
export default {
  name: 'va-alert-demo'
};
</script>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

import VaAlert from '../index.vue';

const snackbar = ref(null);
const snackbar2 = ref(null);
const snackbar3 = ref(null);
const snackbar4 = ref(null);

onMounted(() => {
  snackbar.value?.show();
  snackbar2.value?.show();
  snackbar3.value?.show();
  snackbar4.value?.show();
});
</script>

<template>
<h4>Danger</h4>
<VaAlert ref="snackbar">
  <template #body>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eligendi cum repellendus tempore tenetur autem molestiae sit aliquid similique, nobis obcaecati rem accusantium voluptatum consectetur corrupti quis ab numquam. Laudantium.</p>
  </template>
</VaAlert>
<h4>Success</h4>
<VaAlert
  ref="snackbar2"
  alertType="success"
>
  <template #body>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eligendi cum repellendus tempore tenetur autem molestiae sit aliquid similique, nobis obcaecati rem accusantium voluptatum consectetur corrupti quis ab numquam. Laudantium.</p>
  </template>
</VaAlert>
<h4>Info</h4>
<VaAlert
  ref="snackbar3"
  alertType="info"
>
  <template #body>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eligendi cum repellendus tempore tenetur autem molestiae sit aliquid similique, nobis obcaecati rem accusantium voluptatum consectetur corrupti quis ab numquam. Laudantium.</p>
  </template>
</VaAlert>
<h4>Warning</h4>
<VaAlert
  ref="snackbar4"
  alertType="warning"
>
  <template #body>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eligendi cum repellendus tempore tenetur autem molestiae sit aliquid similique, nobis obcaecati rem accusantium voluptatum consectetur corrupti quis ab numquam. Laudantium.</p>
  </template>
</VaAlert>
</template>
