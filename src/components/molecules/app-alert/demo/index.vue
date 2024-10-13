<script lang="ts">
export default {
  name: 'app-alert-demo'
};
</script>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

import AppAlert from '../index.vue';

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

<template lang="pug">

h4 Danger
app-alert(
ref="snackbar")
  template(#body)
    p Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eligendi cum repellendus tempore tenetur autem molestiae sit aliquid similique, nobis obcaecati rem accusantium voluptatum consectetur corrupti quis ab numquam. Laudantium.

h4 Success
app-alert(
ref="snackbar2",
alertType="success") 
  template(#body)
    p Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eligendi cum repellendus tempore tenetur autem molestiae sit aliquid similique, nobis obcaecati rem accusantium voluptatum consectetur corrupti quis ab numquam. Laudantium.

h4 Info
app-alert(
ref="snackbar3",
alertType="info") 
  template(#body)
    p Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eligendi cum repellendus tempore tenetur autem molestiae sit aliquid similique, nobis obcaecati rem accusantium voluptatum consectetur corrupti quis ab numquam. Laudantium.

h4 Warning
app-alert(
ref="snackbar4",
alertType="warning") 
  template(#body)
    p Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eligendi cum repellendus tempore tenetur autem molestiae sit aliquid similique, nobis obcaecati rem accusantium voluptatum consectetur corrupti quis ab numquam. Laudantium.
</template>
