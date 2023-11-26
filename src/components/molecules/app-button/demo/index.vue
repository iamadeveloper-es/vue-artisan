<script lang="ts">
export default {
    name: 'app-button-demo'
};
</script>
<script setup lang="ts">
import { ref } from 'vue';
import AppButton from '../index.vue';

const counter = ref(0);
const counter2 = ref(0);
const counter3 = ref(0);
const counter4 = ref(0);
const handleEvent = (button: string) => {
    if (button === 'counter') {
        counter.value++;
    } else if (button === 'counter2') {
        counter2.value++;
    } else if (button === 'counter3') {
        counter3.value++;
    } else if (button === 'counter4') {
        counter4.value++;
    }
};
</script>

<template lang="pug">
.app-button-demo
    div
      app-button(
      @clicked="handleEvent('counter3')",
      text="button",
      variant="big",
      :icon="['fa-solid', 'fa-plus']", 
      :iconSize="15")
      p Botón big
      p(v-if="counter3 > 0") {{ `Botón clicado ${counter3} ${counter3 === 1 ? 'vez' : 'veces'}` }}
    div
      app-button(
      @clicked="handleEvent('counter3')",
      text="button",
      variant="big",
      :icon="['fa-solid', 'fa-plus']", 
      :iconSize="15",
      iconPosition="left")
      p Botón big
      p(v-if="counter3 > 0") {{ `Botón clicado ${counter3} ${counter3 === 1 ? 'vez' : 'veces'}` }}
    div
      app-button(
      @clicked="handleEvent('counter3')",
      variant="round-medium",
      :icon="['fa-solid', 'fa-plus']", 
      :iconSize="20")
      p Botón big
      p(v-if="counter3 > 0") {{ `Botón clicado ${counter3} ${counter3 === 1 ? 'vez' : 'veces'}` }}
    div
      app-button(@clicked="handleEvent('counter')", 
      text="button")
      p Botón regular
      p(v-if="counter > 0") {{ `Botón clicado ${counter} ${counter === 1 ? 'vez' : 'veces'}` }}
    div
      app-button(
      @clicked="handleEvent('counter2')", 
      text="button", 
      variant="small")
      p Botón small
      p(v-if="counter2 > 0") {{ `Botón clicado ${counter2} ${counter2 === 1 ? 'vez' : 'veces'}` }}
    div
      app-button(
      @clicked="handleEvent('counter4')", 
      text="button", 
      :variant="['regular', 'full-width']")
      p Botón regular con full-width
      p(v-if="counter4 > 0") {{ `Botón clicado ${counter4} ${counter4 === 1 ? 'vez' : 'veces'}` }}
</template>
