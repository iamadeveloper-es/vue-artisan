<script lang="ts">
export default {
  name: 'va-card-radio-demo'
};
</script>
<script setup lang="ts">
import VaCardRadio from '../index.vue';
import { ref } from 'vue';

const cardSelected = ref('item1');

const handleChangeEvent = (ev: Event) => {
  const target = ev.target as HTMLInputElement;
  cardSelected.value = target.value;
};
</script>

<template>

<div class="va-card-radio-demo">
  <va-card-radio value="item1" v-model="cardSelected" @onChange="handleChangeEvent" name="card-money">
    <template #content>
      <h3>Card Radio 1</h3>
      <p>2.500€</p>
    </template>
  </va-card-radio>
  <va-card-radio value="item2" v-model="cardSelected" @onChange="handleChangeEvent" name="card-money">
    <template #content>
      <h3>Card Radio 2</h3>
      <p>8.700€</p>
    </template>
  </va-card-radio>
  <va-card-radio value="item3" v-model="cardSelected" @onChange="handleChangeEvent" name="card-money">
    <template #content>
      <h3>Card Radio 3</h3>
      <p>850€</p>
    </template>
  </va-card-radio>
  <p>Valor seleccionado:<strong>{{ cardSelected }}</strong></p>
</div>
</template>

<style lang="scss">
.va-card-radio-demo{
  .va-card-radio{
    margin-bottom: 20px;
  }
}
</style>
