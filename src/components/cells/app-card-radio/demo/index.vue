<script lang="ts">
export default {
    name: 'app-card-radio-demo'
};
</script>
<script setup lang="ts">
import AppCardRadio from '../index.vue';
import { ref } from 'vue';

const cardSelected = ref('item1');

const handleChangeEvent = (ev: Event) => {
    const target = ev.target as HTMLInputElement;
    cardSelected.value = target.value;
};
</script>

<template lang="pug">
.app-card-radio-demo 
  app-card-radio(value="item1"
  v-model="cardSelected", 
  @onChange="handleChangeEvent", 
  name="card-money")
    template(#content)
      h3 Card Radio 1
      p 2.500€
  app-card-radio(value="item2"
  v-model="cardSelected", 
  @onChange="handleChangeEvent", 
  name="card-money")
    template(#content)
      h3 Card Radio 2
      p 8.700€
  app-card-radio(value="item3"
  v-model="cardSelected", 
  @onChange="handleChangeEvent", 
  name="card-money")
    template(#content)
      h3 Card Radio 3
      p 850€
  p Valor seleccionado: 
    strong {{ cardSelected }}
</template>

<style lang="scss">
.app-card-radio-demo{
  .app-card-radio{
    margin-bottom: 20px;
  }
}
</style>