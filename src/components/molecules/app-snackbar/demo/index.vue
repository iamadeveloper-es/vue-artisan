<script lang="ts">
export default {
  name: 'app-snackbar-demo'
};
</script>

<script setup lang="ts">
import { ref } from 'vue';

import AppSnackbar from '../index.vue';

const snackbar = ref(null);
const snackbar2 = ref(null);
const snackbar3 = ref(null);

const handleSnackbar = () => {
  snackbar.value?.show();
};

const handleSnackbar2 = () => {
  snackbar2.value?.show();
};

const handleSnackbar3 = () => {
  snackbar3.value?.show();
};
</script>

<template lang="pug">
button(@click="handleSnackbar") Mostrar snackbar
button(@click="handleSnackbar2") Mostrar snackbar arriba
button(@click="handleSnackbar3") Mostrar snackbar con icono
app-snackbar(
ref="snackbar", 
:duration="5") 
    template(#body)
        p Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed soluta magni unde.

app-snackbar(
ref="snackbar2", 
:duration="5", 
position="top") 
    template(#body)
        p Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed soluta magni unde.

app-snackbar(
ref="snackbar3", 
:hasIcon="true") 
    template(#body)
        p Soy un snackbar con un icono :)
</template>
